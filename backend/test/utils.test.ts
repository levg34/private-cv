import { hideData, remove, unmaskMask } from '../utils/utils'
import cv from './data/test-cv.json'
import maskedCv from './data/test-hidden.json'
import maskedCv2 from './data/test-hidden-2.json'
import { CurriculumVitaeMask as Mask } from '../types/mask-types'

describe('test utils', () => {
    it('should hide the data', () => {
        const mask = {
            header: {
                infos: {
                    name: true,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            }
        }
        expect(hideData(cv, mask)).toEqual(maskedCv)
    })

    it('should hide the data', () => {
        const mask = {
            header: {
                infos: {
                    name: true,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    },
                    school: true
                }
            },
            internships: { company: true, location: { city: true } },
            jobHistory: { company: true, location: { city: true }, missions: [{ project: true }] }
        }

        expect(hideData(cv, mask as unknown as Mask)).toEqual(maskedCv2)
    })
})

describe('remove function', () => {
    it('should remove fields in an object based on the mask', () => {
        const obj = {
            name: 'John',
            age: 30,
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ]
        }
        const mask = { name: true, age: true }
        const result = remove(obj, mask)
        expect(result).toEqual({ name: null, age: null, jobHistory: obj.jobHistory })
    })

    it('should remove fields in an array of objects based on the mask', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ]
        }
        const mask = { jobHistory: { city: true } }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                { city: null, year: 2020 },
                { city: null, year: 2019 }
            ]
        })
    })

    it('should handle nested objects and arrays in the mask', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ]
        }
        const mask = { jobHistory: [false, { city: true }] }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: null, year: 2019 }
            ]
        })
    })

    it('should handle complex masks', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ],
            education: {
                school: 'University',
                degree: 'Bachelor'
            }
        }
        const mask = {
            jobHistory: { city: true },
            education: { school: true, degree: true }
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: 'John',
            jobHistory: [
                { city: null, year: 2020 },
                { city: null, year: 2019 }
            ],
            education: {
                school: null,
                degree: null
            }
        })
    })

    xit('should handle complex high level masks', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ],
            education: {
                school: 'University',
                degree: 'Bachelor'
            }
        }
        const mask = {
            jobHistory: { city: true },
            education: true
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: 'John',
            jobHistory: [
                { city: null, year: 2020 },
                { city: null, year: 2019 }
            ],
            education: {
                school: null,
                degree: null
            }
        })
    })

    it('should handle triple nested objects in the mask', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                { city: 'New York', year: 2020 },
                { city: 'Los Angeles', year: 2019 }
            ],
            education: {
                school: 'University',
                degree: 'Bachelor'
            },
            interests: {
                sports: {
                    outdoor: 'Hiking',
                    indoor: 'Chess'
                }
            }
        }
        const mask = {
            jobHistory: { city: true },
            education: { school: true, degree: true },
            interests: { sports: { outdoor: true } }
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                { year: 2020, city: null },
                { year: 2019, city: null }
            ],
            education: { school: null, degree: null },
            interests: { sports: { outdoor: null, indoor: 'Chess' } }
        })
    })

    it('should handle deeply nested arrays in the mask', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: 'Los Angeles',
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: 'Project D', description: 'Description D' }
                    ]
                }
            ]
        }
        const mask = {
            jobHistory: [
                false,
                {
                    city: true,
                    projects: [false, { name: true }]
                }
            ]
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: null,
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: null, description: 'Description D' }
                    ]
                }
            ]
        })
    })

    it('should handle deeply nested arrays in the mask 2', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: 'Los Angeles',
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: 'Project D', description: 'Description D' }
                    ]
                }
            ]
        }
        const mask = {
            jobHistory: [
                false,
                {
                    city: true,
                    projects: { name: true }
                }
            ]
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: null,
                    projects: [
                        { name: null, description: 'Description C' },
                        { name: null, description: 'Description D' }
                    ]
                }
            ]
        })
    })

    it('should handle deeply nested arrays in the mask 3', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: 'Los Angeles',
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: 'Project D', description: 'Description D' }
                    ]
                }
            ]
        }
        const mask = {
            jobHistory: {
                city: true,
                projects: { name: true }
            }
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                {
                    city: null,
                    projects: [
                        { name: null, description: 'Description A' },
                        { name: null, description: 'Description B' }
                    ]
                },
                {
                    city: null,
                    projects: [
                        { name: null, description: 'Description C' },
                        { name: null, description: 'Description D' }
                    ]
                }
            ]
        })
    })

    it('should handle deeply nested arrays in the mask 4', () => {
        const obj = {
            name: 'John',
            jobHistory: [
                {
                    city: 'New York',
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: 'Project B', description: 'Description B' }
                    ]
                },
                {
                    city: 'Los Angeles',
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: 'Project D', description: 'Description D' }
                    ]
                }
            ]
        }
        const mask = {
            jobHistory: {
                city: true,
                projects: [false, { name: true }]
            }
        }
        const result = remove(obj, mask)
        expect(result).toEqual({
            name: obj.name,
            jobHistory: [
                {
                    city: null,
                    projects: [
                        { name: 'Project A', description: 'Description A' },
                        { name: null, description: 'Description B' }
                    ]
                },
                {
                    city: null,
                    projects: [
                        { name: 'Project C', description: 'Description C' },
                        { name: null, description: 'Description D' }
                    ]
                }
            ]
        })
    })
})

describe('test unmaskMask', () => {
    it('should remove properties from the mask object that are set to true in the unmask object', () => {
        const mask = {
            header: {
                infos: {
                    name: true,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    },
                    school: true
                }
            },
            internships: { company: true, location: { city: true } },
            jobHistory: { company: true, location: { city: true }, missions: [{ project: true }] }
        }

        const unmask = {
            header: {
                infos: {
                    name: true
                }
            }
        }

        const result = unmaskMask(mask as unknown as Mask, unmask as unknown as Mask)

        expect(result).toEqual({
            header: {
                infos: {
                    name: null,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    },
                    school: true
                }
            },
            internships: { company: true, location: { city: true } },
            jobHistory: { company: true, location: { city: true }, missions: [{ project: true }] }
        })
    })

    it('should not remove properties from the mask object that are set to false in the unmask object', () => {
        const mask = {
            header: {
                infos: {
                    name: true,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    },
                    school: true
                }
            },
            internships: { company: true, location: { city: true } },
            jobHistory: { company: true, location: { city: true }, missions: [{ project: true }] }
        }

        const unmask = {
            header: {
                infos: {
                    name: true
                }
            },
            formation: {
                studies: {
                    location: {
                        city: false
                    },
                    school: true
                }
            }
        }

        const result = unmaskMask(mask as unknown as Mask, unmask as unknown as Mask)

        expect(result).toEqual({
            header: {
                infos: {
                    name: null,
                    birthday: true,
                    address: [true, true, false],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false as unknown as boolean[]
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    },
                    school: null
                }
            },
            internships: { company: true, location: { city: true } },
            jobHistory: { company: true, location: { city: true }, missions: [{ project: true }] }
        })
    })
})
