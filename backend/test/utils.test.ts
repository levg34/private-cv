import { hideData, remove } from '../utils/utils'
import cv from './data/test-cv.json'
import maskedCv from './data/test-hidden.json'
import maskedCv2 from './data/test-hidden-2.json'
import { Mask } from '../types/mask-types'

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
                position: false
            }
        }
        expect(hideData(cv, mask)).toEqual(maskedCv)
    })

    xit('should hide the data', () => {
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
                position: false
            },
            formation: {
                studies: {
                    location: {
                        city: true
                    }
                }
            }
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
})
