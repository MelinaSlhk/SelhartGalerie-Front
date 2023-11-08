import { Tableau } from "./tableau";

export interface Utilisateur {
  prenom: string;
  nom: string;
  email: string;
  motdepasse: string;
  administrateur: boolean;
  tableauxFavoris: Tableau[];
}
