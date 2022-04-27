import { Cours } from "./cours";
import { Experience } from "./experience";
import { Formation } from "./formation";
import { Publication } from "./publication";

export class Enseignant {
    id!: number;
    nom!: String;
    prenom!: String;
    email!: String;
    tel!: number;
    filename!: String;
    specialite!: String;
    resume!: String;
    pwd!: String;
    form!: Array<Formation>;
    exp!: Array<Experience>;
    pub!: Array<Publication>;
    cour!: Array<Cours>;
}

