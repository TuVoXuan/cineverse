import { SeatType } from "@/constants";
import { SeatingLayout } from "@/types";

export function convertMinutesToHours(minutes: number){
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${remainingMinutes}'`;
}

export function generateSeatLayoutObject(numRows = 0, numColumns = 0) {
  const seatLayout: SeatingLayout = {};

  if (numRows <= 0 || numColumns <= 0) {
    return seatLayout;
  }
  
  // Generate row labels (A, B, C, ...)
  for (let i = 0; i < numRows; i++) {
      const rowLabel = String.fromCharCode(65 + i); // 65 is the ASCII value for 'A'
      seatLayout[rowLabel] = Array.from({ length: numColumns }, () => ({
        seatLabel: null,
        type: SeatType.Unset
      })); // Create an array filled with zeros
  }
  
  return seatLayout;
}