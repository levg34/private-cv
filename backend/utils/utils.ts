import { CurriculumVitae } from "../types/types";

export type Mask = Record<string, any>
export type MaskedCV = Record<string, any>

export const hideData = (cv: CurriculumVitae, mask: Mask): MaskedCV => {
    // On crée une copie du cv pour ne pas modifier l’original
    const maskedCv = JSON.parse(JSON.stringify(cv));
    // On parcourt les clés du masque
    for (const key of Object.keys(mask)) {
        // On vérifie si la clé existe dans le cv 
        if (key in maskedCv) {
            // On appelle une fonction récursive qui va masquer les données selon le masque 
            maskedCv[key] = maskData(maskedCv[key], mask[key]);
        }
    }
    // On retourne le cv masqué 
    return maskedCv;
}

// Fonction récursive qui prend en paramètre une donnée et un masque 
const maskData = (data: any, mask: any): any => {
    // Si le masque est un booléen, on retourne null si il est vrai, sinon on retourne la donnée 
    if (typeof mask === "boolean") {
        return mask ? null : data;
    }
    // Si le masque est un tableau, on vérifie que la donnée aussi 
    if (Array.isArray(mask)) {
        if (Array.isArray(data)) {
            // On crée un nouveau tableau vide 
            const maskedArray = [];
            // On parcourt les éléments du masque et de la donnée 
            for (let i = 0; i < mask.length; i++) {
                // On appelle récursivement la fonction sur chaque élément
                maskedArray[i] = maskData(data[i], mask[i]);
            }
            // On retourne le tableau masqué 
            return maskedArray;
        } else {
            // Si la donnée n’est pas un tableau, on retourne null 
            return null;
        }
    }
    // Si le masque est un objet, on vérifie que la donnée aussi 
    if (typeof mask === "object") {
        if (typeof data === "object") {
            // On crée un nouvel objet vide 
            const maskedObject: Record<string, any> = {};
            // On parcourt les clés du masque et de la donnée 
            for (const key of Object.keys(mask)) {
                // On vérifie si la clé existe dans la donnée 
                if (key in data) {
                    // On appelle récursivement la fonction sur chaque propriété 
                    maskedObject[key] = maskData(data[key], mask[key]);
                }
            }
            // On retourne l’objet masqué 
            return maskedObject;
        } else {
            // Si la donnée n’est pas un objet, on retourne null 
            return null;
        }
    }
    // Si le masque n’est ni un booléen, ni un tableau, ni un objet, on retourne la donnée 
    return data;
}
