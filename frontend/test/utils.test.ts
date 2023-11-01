import { calculateAge } from '../src/utils'

describe('calculateAge function', () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers()
        const fakeToday = new Date('2023-11-01')
        vi.setSystemTime(fakeToday)
    })

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers()
    })

    it('should calculate the age correctly when the birthday has already occurred this year', () => {
        const birthday = '1990-06-20'
        const expectedAge = 33

        const age = calculateAge(birthday)
        expect(age).toBe(expectedAge)
    })

    it("should calculate the age correctly when the birthday hasn't occurred yet this year", () => {
        const birthday = '1990-12-20'
        const expectedAge = 32

        const age = calculateAge(birthday)
        expect(age).toBe(expectedAge)
    })

    it('should return 0 when the birthdate is today', () => {
        const birthday = '2023-11-01'
        const expectedAge = 0

        const age = calculateAge(birthday)
        expect(age).toBe(expectedAge)
    })

    it.skip('should return 0 when the birthdate is in the future', () => {
        const birthday = '2030-06-20'
        const expectedAge = 0

        const age = calculateAge(birthday)
        expect(age).toBe(expectedAge)
    })
})
