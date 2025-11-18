export const getApiKey = async (): Promise<string> => {
  const res = await fetch(
    'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/key'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch API key');
  }

  const data = await res.json();
  return data.key; // Antar att svaret innehåller { key: "din-api-key" }
};

import { BookingRequest, BookingResponse} from "../../src/types";

export const createBooking = async (
  booking: BookingRequest,
  apiKey: string
): Promise<BookingResponse> => {
  const res = await fetch(
    'https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(booking),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to create booking');
  }

  const data: BookingResponse = await res.json();
  return data;
};

