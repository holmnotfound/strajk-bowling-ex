import { BookingData } from "../types";

export function validateBooking(data: BookingData): string | null {
  if (data.people > data.lanes * 4) {
    return `Max 4 players per lane! You have ${data.people} players and ${data.lanes} lanes.`;
  }

  if (data.shoeSizes.length !== data.people) {
    return `Number of shoe sizes (${data.shoeSizes.length}) must match number of players (${data.people}).`;
  }

  if (data.shoeSizes.some(s => s <= 0)) {
    return "All shoe sizes must be greater than 0.";
  }

  return null;
}