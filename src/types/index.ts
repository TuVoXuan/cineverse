export type TicketingStep = {
  code: string;
  label: string;
  icon: React.ReactNode;
};

export interface ISeat {
  id?: number;
  isSelected?: boolean;
  seatLabel: string|null;
  type: string;
}

export type SeatingLayout = {
  [row: string]: ISeat[];
};