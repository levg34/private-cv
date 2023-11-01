export function calculateAge(birthday: string | number | Date) {
    const birthDate = new Date(birthday)
    const currentDate = new Date()
    let age = currentDate.getFullYear() - birthDate.getFullYear()

    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--
    }

    return age
}
