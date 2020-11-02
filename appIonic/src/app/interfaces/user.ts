import { Training } from './training';
export interface User {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    birthday: Date;
    phone: string;
    password: string;
    email: string;
    status: boolean;
    immatriculation: string;
    lng: number;
    lat: number;
    term_use: boolean;
    training_id: number;
}
