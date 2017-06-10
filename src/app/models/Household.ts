export interface Household {
  $key?: string;
  guests: string[];
  rsvp: number;
  total: number;
  plus1?: string;
}
