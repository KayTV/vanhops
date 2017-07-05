export interface Household {
  $key?: string;
  guests: string[];
  rsvp: number;
  total: number;
  plus1?: string;
  answers?: Array<Answers>;
}

export interface Answers {
  $key?:  string;
  name: string;
  rsvp: string;
  note?: string;
  plusone?: string;
}
