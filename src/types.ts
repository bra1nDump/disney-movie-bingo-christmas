export interface BingoConfiguration {
  title: string;
  description: string;
  events: BingoEvent[];
  storageKey: string;
  backgroundImages?: string[];
}

export interface BingoEvent {
  name: string;
  weight: number;
} 