import { CurriculumVitaeMask as Mask } from '../types/mask-types'
import { MaskedCV } from '../types/masked-types'
import { CurriculumVitae } from '../types/types'

export const hideData = (cv: CurriculumVitae, mask: Mask): MaskedCV => {
    const maskedCv = JSON.parse(JSON.stringify(cv))
    return remove(maskedCv, mask)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function remove(obj: any, mask: any): any {
    if (typeof mask === 'object') {
        if (Array.isArray(mask) && Array.isArray(obj)) {
            mask.forEach((maskElement, index) => {
                if (maskElement === true) {
                    obj[index] = null
                } else if (typeof maskElement === 'object' && obj[index] !== undefined) {
                    obj[index] = remove(obj[index], maskElement)
                }
            })
        } else {
            for (const key in mask) {
                if (mask[key] === true) {
                    obj[key] = null
                } else if (typeof mask[key] === 'object' && obj[key] !== undefined) {
                    if (Array.isArray(obj[key]) && !Array.isArray(mask[key])) {
                        for (let i = 0; i < obj[key].length; i++) {
                            obj[key][i] = remove(obj[key][i], mask[key])
                        }
                    } else {
                        obj[key] = remove(obj[key], mask[key])
                    }
                }
            }
        }
    }
    return obj
}
