import { hideData } from '../utils/utils'
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
                    address: [
                        true,
                        true,
                        false
                    ],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false
            },
        }
        expect(hideData(cv, mask)).toEqual(maskedCv)
    })

    it('should hide the data', () => {
        const mask = {
            header: {
                infos: {
                    name: true,
                    birthday: true,
                    address: [
                        true,
                        true,
                        false
                    ],
                    email: true,
                    phone: true,
                    pictureUrl: true
                },
                position: false
            },
            formation: {
                studies:
                {
                    "location": {
                        "city": true
                    }
                }
            }
        }

        expect(hideData(cv, mask as unknown as Mask)).toEqual(maskedCv2)
    })
})
