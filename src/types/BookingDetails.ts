// types.ts
export interface BookingDetails {
  bookingId: string;
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
  price: number;
  active: boolean;
}
