import { AvisDuTableau } from "./avisDuTableau";

export interface DataRetourAvis {

    status: string;
    message: string;
    data: AvisDuTableau[];
}
