import { BookingDetails } from "./BookingDetails";


export interface BookingResponse {
  success: boolean;
  bookingDetails: BookingDetails
}