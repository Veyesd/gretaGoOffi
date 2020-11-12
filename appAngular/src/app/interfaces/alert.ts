export interface Alert {
  id?: number;
  lng: number;
  lat: number;
  status:  boolean;
  created_at: Date;
  updated_at:Date;
  user_id: number;
}
