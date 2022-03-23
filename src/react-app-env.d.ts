/// <reference types="react-scripts" />

export interface Show {
  show?: {
    name: string;
    image: { medium: string };
    genres: string[];
    language: string;
    id: string;
    premiered: string;
    ended: string;
  };
  name: string;
  image: { medium: string };
  genres: [string];
  language: string;
  id: string;
  premiered: string;
  ended: string;
}
