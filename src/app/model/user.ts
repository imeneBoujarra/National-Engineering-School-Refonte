import { Cours } from "./cours";
import { Experience } from "./experience";
import { Formation } from "./formation";
import { Publication } from "./publication";

export class User {
    id!: number;
    username!: string;
    email!: string;
    password!: string;  
    role!: string;
    jwt!: string;
    nom!: String;
    prenom!: String;
    tel!: number;
    filename!: String;
    specialite!: String;
    resume!: String;
    form!: Array<Formation>;
    exp!: Array<Experience>;
    pub!: Array<Publication>;
    cour!:Array<Cours>;
}