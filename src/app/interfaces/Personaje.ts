import { Location } from "./Location";
import { Origin } from "./Origin";

export interface Personaje{
    id: number;
    name: string;
    status: string;
    species: string;
    series: string;
    gender: string;
    type: string;
    image: string;
    url: string;
    location: Location;
    origin: Origin;           
}

