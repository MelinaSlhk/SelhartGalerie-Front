import { Tableau } from "./tableau";
import { Utilisateur } from "./utilisateur";

export interface AvisDuTableau {
  id: number; 
  avis: string; 
  utilisateur?: Utilisateur;
  
}

