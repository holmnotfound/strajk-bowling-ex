export function formatBookingDate(isoString: string) {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("sv-SE", options).format(date);
}

export function formatBookingId(id: string){
    return id.slice(0, 8)
}