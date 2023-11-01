export interface MaskedCV {
    header?: MaskedHeader | null
    formation?: MaskedFormation | null
    jobHistory?: (MaskedJobHistory | null)[] | null
    internships?: (MaskedInternship | null)[] | null
    interests?: (string | null)[] | null
    openSource?: (MaskedOpenSource | null)[] | null
    metadata: MaskedMetadata
}

export interface MaskedFormation {
    studies?: (MaskedStudy | null)[] | null
    languages?: (MaskedLanguage | null)[] | null
    technicalSkills?: (string | null)[] | null
}

export interface MaskedLanguage {
    name?: string | null
    level?: string | null
}

export interface MaskedStudy {
    start?: string | null
    end?: string | null
    location?: MaskedLocation | null
    degree?: string | null
    school?: string | null
}

export interface MaskedHeader {
    infos?: MaskedInfos | null
    position?: (string | null)[] | null
}

export interface MaskedInfos {
    name?: string | null
    birthday?: string | null //Date
    address?: (string | null)[] | null
    email?: string | null
    phone?: string | null
    pictureUrl?: string | null
}

export interface MaskedInternship {
    start?: string | null
    end?: string | null
    location?: MaskedLocation | null
    position?: string | null
    size?: number | null
    company?: string | null
    subtitle?: string | null
    description?: string | null
}

export interface MaskedLocation {
    city?: string | null
    country?: string | null
}

export interface MaskedJobHistory {
    start?: string | null
    end?: string | null
    location?: MaskedLocation | null
    position?: string | null
    company?: string | null
    missions?: (MaskedMission | null)[] | null
}

export interface MaskedMission {
    start?: string | null
    end?: string | null
    project?: string | null
    description?: string | null
    size?: number | null
    teams?: (MaskedTeam | null)[] | null
}

export interface MaskedTeam {
    position?: string | null
    team?: string | null
    start?: string | null
    end?: string | null
    size?: number | null
    tasks?: (string | null)[] | null
    duration?: string | null
}

export interface MaskedMetadata {
    sectionTitles?: MaskedSectionTitles | null
    defaultCountry?: string | null
    defaultSortKey?: MaskedDefaultSortKey | null
}

export interface MaskedDefaultSortKey {
    key?: string | null
    direction?: string | null
}

export interface MaskedSectionTitles {
    formation?: string | null
    jobHistory?: string | null
    internships?: string | null
    interests?: string | null
    openSource?: string | null
}

export interface MaskedOpenSource {
    title?: string | null
    technologies?: (string | null)[] | null
    description?: string | null
    link?: string | null
    codeLink?: string | null
}
