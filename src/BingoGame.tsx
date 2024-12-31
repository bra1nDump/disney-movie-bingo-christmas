import './App.css'
import React, { useState, useEffect } from 'react';
import { Button } from "./components";
import { RefreshCw } from 'lucide-react';
import { BingoConfiguration, BingoEvent } from './types';

// Helper functions
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

function generateBingoCard(events: BingoEvent[], size: number): string[] {
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

const BingoCard: React.FC<BingoCardProps & { backgroundImageMap: Record<number, string>, onImageClick: (image: string) => void }> = ({ 
  events, 
  cardSize, 
  selectedCells, 
  onCellClick,
  backgroundImageMap,
  onImageClick
}) => {
  const gridColsLookup = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  };
  const gridClassName = `grid ${gridColsLookup[cardSize]} gap-2 md:gap-4 w-full max-w-[800px]`;
  
  return (
    <div className={gridClassName}>
      {events.map((event, idx) => {
        const backgroundImage = backgroundImageMap[idx];
        const hasBackground = selectedCells[idx] && backgroundImage;
        
        return (
          <div 
            key={idx}
            onClick={() => onCellClick(idx)}
            className={`aspect-square p-2 md:p-4 border-2 rounded-lg flex items-center justify-center text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black hover:bg-gray-50 cursor-pointer whitespace-pre-line transition-all relative group ${
              selectedCells[idx] ? 'bg-pink-100 hover:bg-pink-200' : ''
            }`}
            style={hasBackground ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            } : undefined}
          >
            {hasBackground && (
              <>
                <div className="absolute inset-0 bg-pink-100/80 group-hover:bg-pink-200/80 transition-colors" />
                <div 
                  className="absolute top-1 right-1 p-1 rounded-full bg-white/80 hover:bg-white cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageClick(backgroundImage);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </>
            )}
            <span className={hasBackground ? 'relative z-10' : undefined}>
              {event}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Modal component for full screen image
const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img 
        src={image} 
        alt="Full screen" 
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button 
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

// Main BingoGame Component
interface BingoGameProps {
  config: BingoConfiguration;
}

interface BingoState {
  events: string[];
  selectedCells: boolean[];
  backgroundImageMap: Record<number, string>;
}

const BingoGame: React.FC<BingoGameProps> = ({ config }) => {
  const loadInitialState = () => {
    const savedState = localStorage.getItem(config.storageKey);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      // Ensure backgroundImageMap exists in saved state
      if (!parsedState.backgroundImageMap) {
        parsedState.backgroundImageMap = generateBackgroundImageMap(config.backgroundImages);
      }
      return parsedState;
    }

    return {
      events: generateBingoCard(config.events, 3),
      selectedCells: Array(9).fill(false),
      backgroundImageMap: generateBackgroundImageMap(config.backgroundImages)
    };
  };

  // Helper function to generate background image map
  const generateBackgroundImageMap = (images?: string[]): Record<number, string> => {
    const backgroundImageMap: Record<number, string> = {};
    if (images) {
      const availableImages = [...images];
      const cellCount = 9;
      for (let i = 0; i < cellCount; i++) {
        if (availableImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableImages.length);
          backgroundImageMap[i] = availableImages[randomIndex];
          availableImages.splice(randomIndex, 1);
        }
      }
    }
    return backgroundImageMap;
  };

  const [state, setState] = useState<BingoState>(loadInitialState);
  const [fullScreenImage, setFullScreenImage] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(config.storageKey, JSON.stringify(state));
  }, [state, config.storageKey]);

  const regenerateCard = () => {
    const newState: BingoState = {
      events: generateBingoCard(config.events, 3),
      selectedCells: Array(9).fill(false),
      backgroundImageMap: generateBackgroundImageMap(config.backgroundImages)
    };
    setState(newState);
  };

  const handleCellClick = (index: number) => {
    setState((prevState: BingoState) => ({
      ...prevState,
      selectedCells: prevState.selectedCells.map((selected: boolean, i: number) => 
        i === index ? !selected : selected
      )
    }));
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col bg-white p-4 md:p-8">
      <div className="w-full max-w-[800px] mx-auto pt-4 pb-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">{config.title}</h1>
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
          backgroundImageMap={state.backgroundImageMap}
          onImageClick={setFullScreenImage}
        />
      </div>
      <ImageModal 
        image={fullScreenImage} 
        onClose={() => setFullScreenImage("")}
      />
    </div>
  );
};

export default BingoGame; 