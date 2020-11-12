export interface Trip {
    id: number;
    place_max: number;
    date_departure: Date;
    lat_departure: Float32Array;
    lng_departure: Float32Array;
    lat_arrival: Float32Array;
    lng_arrival: Float32Array;
    take: boolean;
    status: boolean;
    
}
