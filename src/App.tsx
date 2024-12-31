import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BingoGame from './BingoGame';
import { disneyMovieConfig, gayPartyConfig } from './constants';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/disney" replace />} />
        <Route path="/disney" element={<BingoGame config={disneyMovieConfig} />} />
        <Route path="/gayest-party" element={<BingoGame config={gayPartyConfig} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
