import { CurriculumVitae } from './types'

export type Mask<T> = T extends object
    ? {
          [K in keyof T]?: Mask<T[K]>
      }
    : boolean

export type CurriculumVitaeMask = Mask<CurriculumVitae>
