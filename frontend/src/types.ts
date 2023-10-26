export interface CurriculumVitae {
    header: Header
    formation: Formation
    jobHistory: JobHistory[]
    internships: Internship[]
    interests: string[]
    openSource: OpenSource[]
    metadata: Metadata
}

export interface Formation {
    studies: Study[]
    languages: Language[]
    technicalSkills: string[]
}

export interface Language {
    name: string
    level: string
}

export interface Study {
    start: string
    end: string
    location: Location
    degree: string
    school: string
}

export interface Header {
    infos: Infos
    position: string[]
}

export interface Infos {
    name: string
    birthday: string //Date
    address: string[]
    email: string
    phone?: string
    pictureUrl?: string
}

export interface Internship {
    start: string
    end: string
    location: Location
    position: string
    size: number
    company: string
    subtitle: string
    description: string
}

export interface Location {
    city: string
    country?: string
}

export interface JobHistory {
    start: string
    end: string
    location: Location
    position: string
    company: string
    missions: Mission[]
}

export interface Mission {
    start?: string
    end?: string
    project?: string
    description: string
    size: number
    teams: Team[]
}

export interface Team {
    position: string
    team?: string
    start?: string
    end?: string
    size?: number
    tasks: string[]
    duration?: string
}

export interface Metadata {
    sectionTitles: SectionTitles
    defaultCountry: string
    defaultSortKey: DefaultSortKey
}

export interface DefaultSortKey {
    key: string
    direction: string
}

export interface SectionTitles {
    formation: string
    jobHistory: string
    internships: string
    interests: string
    openSource: string
}

export interface OpenSource {
    title: string
    technologies: string[]
    description: string
    link?: string
    codeLink?: string
}
