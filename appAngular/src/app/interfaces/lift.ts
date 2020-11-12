export interface Lift {
  id?: number;
  date_departure: number;
  lat_departure:number;
    lng_departure: number;
    lat_arrival: number;
    lng_arrival:number;
    take: number;
    status: boolean;
    create_at:Date;
    update_at:Date;
}
