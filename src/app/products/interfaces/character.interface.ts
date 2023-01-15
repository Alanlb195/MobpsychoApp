import { AbilitieSimple } from './abilitie.interface';
export interface Character {
    idCharacter: number;
    name: string;
    urlImg: string;
    price: number;
    age: number;
    birthDate: Date;
}

export interface CharacterWithAbilities {
    idCharacter: number;
    name: string;
    urlImg: string;
    price: number;
    age: number;
    birthDate: Date;
    abilities: AbilitieSimple[];
}