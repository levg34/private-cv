import { hideData } from "../utils/utils"
import cv from './test-cv.json'

describe('test utils', () => {
    it('should hide the data', () => {
        const mask = {}
        expect(hideData(cv, mask)).toEqual({})
    })
})
