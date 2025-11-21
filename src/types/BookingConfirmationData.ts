import { BookingDetails } from "./BookingDetails";

export interface BookingConfirmationData {
  booking?: BookingDetails;
  error?: string;
}