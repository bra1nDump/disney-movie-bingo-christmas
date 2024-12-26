import './App.css'

import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle } from "./components";
import { RefreshCw } from 'lucide-react';
import { totalMovies, eventDefinitions } from './constants';

// Define types for BingoConfig and BingoEvent
interface BingoConfigOptions {
  cardSize?: number;
  thresholdHigh?: number;
  thresholdMed?: number;
  thresholdLow?: number;
  cardsForHighProb?: number;
  cardsForMedProb?: number;
  cardsForLowProb?: number;
}

class BingoConfig {
  cardSize: number;
  thresholdHigh: number;
  thresholdMed: number;
  thresholdLow: number;
  cardsForHighProb: number;
  cardsForMedProb: number;
  cardsForLowProb: number;

  constructor({
    cardSize = 3,
    thresholdHigh = 0.4,
    thresholdMed = 0.3,
    thresholdLow = 0.2,
    cardsForHighProb = 6,
    cardsForMedProb = 4,
    cardsForLowProb = 2
  }: BingoConfigOptions = {}) {
    this.cardSize = cardSize;
    this.thresholdHigh = thresholdHigh;
    this.thresholdMed = thresholdMed;
    this.thresholdLow = thresholdLow;
    this.cardsForHighProb = cardsForHighProb;
    this.cardsForMedProb = cardsForMedProb;
    this.cardsForLowProb = cardsForLowProb;
  }

  get cellsPerCard(): number {
    return this.cardSize * this.cardSize;
  }

  get minAcceptableCards(): number {
    return Math.max(
      this.cardsForHighProb,
      this.cardsForMedProb,
      this.cardsForLowProb
    );
  }
}

class BingoEvent {
  name: string;
  probability: number;

  constructor(name: string, probability: number) {
    this.name = name;
    this.probability = probability;
  }

  fillCardsCount(cfg: BingoConfig): number {
    if (this.probability >= cfg.thresholdHigh) {
      return cfg.cardsForHighProb;
    } else if (this.probability >= cfg.thresholdMed) {
      return cfg.cardsForMedProb;
    } else if (this.probability >= cfg.thresholdLow) {
      return cfg.cardsForLowProb;
    }
    return 0;
  }
}

// Helper functions
function createEventsFromDefinitions(definitions: Record<string, string[]>, allMovies: string[]): BingoEvent[] {
  return Object.entries(definitions).map(([eventName, matchingMovies]) => {
    const probability = matchingMovies.length / allMovies.length;
    return new BingoEvent(eventName, probability);
  });
}

function computeCardFillCapacity(events: BingoEvent[], cfg: BingoConfig): number {
  const totalFillableCells = events.reduce((sum, event) => 
    sum + event.fillCardsCount(cfg), 0
  );
  return Math.floor(totalFillableCells / cfg.cellsPerCard);
}

function distributeEventsToCards(events: BingoEvent[], cfg: BingoConfig): string[][] {
  const fullCardsPossible = computeCardFillCapacity(events, cfg);
  const numCards = fullCardsPossible;

  const cards: string[][] = Array(numCards).fill(null).map(() => []);
  const cardFillCounts: number[] = Array(numCards).fill(0);

  // Sort events by probability (descending)
  const sortedEvents = [...events].sort((a, b) => b.probability - a.probability);

  for (const event of sortedEvents) {
    let placementsNeeded = event.fillCardsCount(cfg);
    if (placementsNeeded <= 0 || numCards === 0) continue;

    // Shuffle card indices
    const cardIndices = Array.from({length: numCards}, (_, i) => i)
      .sort(() => Math.random() - 0.5);

    for (const cardIdx of cardIndices) {
      if (cardFillCounts[cardIdx] < cfg.cellsPerCard) {
        cards[cardIdx].push(event.name);
        cardFillCounts[cardIdx]++;
        placementsNeeded--;
        if (placementsNeeded === 0) break;
      }
    }
  }

  return cards;
}

// BingoCard Component
interface BingoCardProps {
  events: string[];
  cardSize: 3 | 4 | 5;
}

const BingoCard: React.FC<BingoCardProps> = ({ events, cardSize }) => {
  const gridColsLookup = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  };
  const gridClassName = `grid ${gridColsLookup[cardSize]} gap-4 p-6 h-full`;
  
  return (
    <Card className="min-h-[80vh] w-full max-w-[90vw] m-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Disney Movie Bingo</CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-4rem)]">
        <div className={gridClassName}>
          {events.map((event, idx) => (
            <div 
              key={idx}
              className="aspect-square p-4 border-2 rounded-lg flex items-center justify-center text-center text-base font-medium text-black hover:bg-gray-50 cursor-pointer"
            >
              {event}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Component
const BingoGenerator: React.FC = () => {
  const [card, setCard] = useState<string[]>(() => {
    const config = new BingoConfig();
    const events = createEventsFromDefinitions(eventDefinitions, totalMovies);
    const cards = distributeEventsToCards(events, config);
    return cards[0] || [];
  });

  const regenerateCard = () => {
    const config = new BingoConfig();
    const events = createEventsFromDefinitions(eventDefinitions, totalMovies);
    const cards = distributeEventsToCards(events, config);
    setCard(cards[0] || []);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Disney Movie Bingo Card</h1>
        <Button onClick={regenerateCard} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          New Card
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <BingoCard 
          events={card} 
          cardSize={4}
        />
      </div>
    </div>
  );
};

export default BingoGenerator;
