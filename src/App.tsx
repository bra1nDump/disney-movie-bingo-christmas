import './App.css'

import React, { useState, useEffect } from 'react';
import { Button } from "./components";
import { RefreshCw } from 'lucide-react';
import { totalMovies, eventDefinitions } from './constants';

// Define types for BingoEvent
class BingoEvent {
  name: string;
  weight: number;

  constructor(name: string, matchingMovies: string[]) {
    this.name = name;
    this.weight = matchingMovies.length / totalMovies.length;
  }
}

// Helper functions
function createEvents(): BingoEvent[] {
  return Object.entries(eventDefinitions).map(([eventName, matchingMovies]) => {
    return new BingoEvent(eventName, matchingMovies);
  });
}

function weightedRandomSelect(events: BingoEvent[]): BingoEvent {
  const totalWeight = events.reduce((sum, event) => sum + event.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const event of events) {
    random -= event.weight;
    if (random <= 0) {
      return event;
    }
  }
  
  return events[events.length - 1]; // Fallback
}

function generateBingoCard(size: number): string[] {
  const events = createEvents();
  const selectedEvents: string[] = [];
  const cellsNeeded = size * size;
  
  while (selectedEvents.length < cellsNeeded) {
    const event = weightedRandomSelect(events);
    if (!selectedEvents.includes(event.name)) {
      selectedEvents.push(event.name);
    }
  }
  
  return selectedEvents;
}

// BingoCard Component
interface BingoCardProps {
  events: string[];
  cardSize: 3 | 4 | 5;
  selectedCells: boolean[];
  onCellClick: (index: number) => void;
}

const BingoCard: React.FC<BingoCardProps> = ({ events, cardSize, selectedCells, onCellClick }) => {
  const gridColsLookup = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  };
  const gridClassName = `grid ${gridColsLookup[cardSize]} gap-2 md:gap-4 w-full max-w-[800px]`;
  
  return (
    <div className={gridClassName}>
      {events.map((event, idx) => (
        <div 
          key={idx}
          onClick={() => onCellClick(idx)}
          className={`aspect-square p-2 md:p-4 border-2 rounded-lg flex items-center justify-center text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black hover:bg-gray-50 cursor-pointer whitespace-pre-line transition-colors ${
            selectedCells[idx] ? 'bg-pink-100 hover:bg-pink-200' : ''
          }`}
        >
          {event}
        </div>
      ))}
    </div>
  );
};

// Main Component
const BingoGenerator: React.FC = () => {
  const STORAGE_KEY = 'disney-bingo-state';
  
  // Load initial state from localStorage or generate new
  const loadInitialState = () => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
    return {
      events: generateBingoCard(3),
      selectedCells: Array(9).fill(false)
    };
  };

  const [state, setState] = useState(loadInitialState);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const regenerateCard = () => {
    const newState = {
      events: generateBingoCard(3),
      selectedCells: Array(9).fill(false)
    };
    setState(newState);
  };

  const handleCellClick = (index: number) => {
    setState((prevState: { events: string[], selectedCells: boolean[] }) => ({
      ...prevState,
      selectedCells: prevState.selectedCells.map((selected: boolean, i: number) => 
        i === index ? !selected : selected
      )
    }));
  };

  return (
    <div className="p-4 md:p-8 min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-[800px] mx-auto pt-4 pb-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">🎄 Disney Movie Bingo</h1>
        <Button onClick={regenerateCard} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Shuffle
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <BingoCard 
          events={state.events}
          cardSize={3}
          selectedCells={state.selectedCells}
          onCellClick={handleCellClick}
        />
      </div>
    </div>
  );
};

export default BingoGenerator;
