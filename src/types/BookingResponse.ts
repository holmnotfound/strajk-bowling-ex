import { BookingRequest } from "./BookingRequest";

export interface BookingResponse extends BookingRequest {
  price: number;
  id: string;
  active: boolean;
}