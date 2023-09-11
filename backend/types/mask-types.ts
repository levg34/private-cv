import { Header, Formation, JobHistory, Internship, OpenSource, Metadata, DefaultSortKey } from "./types"

export type Mask = {
    header?: Partial<HeaderMask>
    formation?: Partial<FormationMask>
    jobHistory?: boolean | JobHistoryMask[]
    internships?: boolean | InternshipMask[]
    interests?: boolean | boolean[]
    openSource?: boolean | OpenSourceMask[]
    metadata?: Partial<MetadataMask>
}

export type MaskedCV = {
    header?: Partial<Header>
    formation?: Partial<Formation>
    jobHistory?: null | JobHistory[]
    internships?: null | Internship[]
    interests?: null | string[]
    openSource?: null | OpenSource[]
    metadata?: Partial<Metadata>
}

export type HeaderMask = {
    infos?: Partial<InfosMask>
    position?: boolean | boolean[]
}

export type FormationMask = {
    studies?: boolean | StudyMask[]
    languages?: boolean | LanguageMask[]
    technicalSkills?: boolean | boolean[]
}

export type LanguageMask = {
    name: boolean
    level: boolean
}

export type StudyMask = {
    start: boolean
    end: boolean
    location: LocationMask
    degree: boolean
    school: boolean
}

export type InfosMask = {
    name: boolean
    birthday: boolean //Date 
    address: boolean[]
    email: boolean
    phone?: boolean
    pictureUrl?: boolean
}

export type InternshipMask = {
    start: boolean
    end: boolean
    location: LocationMask
    position: boolean
    size: boolean
    company: boolean
    subtitle: boolean
    description: boolean
}

export type LocationMask = {
    city: boolean
    country?: boolean
}

export type JobHistoryMask = {
    start: boolean
    end: boolean
    location: LocationMask
    position: boolean
    company: boolean
    missions: MissionMask[]
}

export type MissionMask = {
    start?: boolean
    end?: boolean
    project?: boolean
    description: boolean
    size: boolean
    teams: TeamMask[]
}

export type TeamMask = {
    position: boolean
    team?: boolean
    start?: boolean
    end?: boolean
    size?: boolean
    tasks: boolean[]
}

export type MetadataMask = {
    sectionTitles: SectionTitlesMask
    defaultCountry: string
    defaultSortKey: DefaultSortKey
}

export interface SectionTitlesMask {
    formation: string
    jobHistory: string
    internships: string
    interests: string
    openSource: string
}

export interface OpenSourceMask {
    title: string
    technologies: string[]
    description: string
    link?: string
    codeLink?: string
}
