import { hideData } from '../utils/utils'
import cv from './test-cv.json'
import maskedCv from './test-hidden.json'

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
})
