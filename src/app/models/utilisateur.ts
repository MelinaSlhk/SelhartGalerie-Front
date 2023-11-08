import { Tableau } from "./tableau";

export interface Utilisateur {
  id: number,
  prenom: string;
  nom: string;
  email: string;
  motdepasse: string;
  administrateur: boolean;
  tableauxFavoris: Tableau[];
}
