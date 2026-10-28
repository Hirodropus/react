import { useState } from 'react';
import WorldClockForm from './components/WorldClockForm';
import WorldClockList from './components/WorldClockList';
import './App.css';

function App() {
  const [clocks, setClocks] = useState([]);

  const handleAddClock = (name, timezone) => {
    const newClock = {
      id: Date.now().toString(), // Уникальный ID
      name,
      timezone,
    };
    setClocks((prev) => [...prev, newClock]);
  };

  const handleRemoveClock = (id) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Мировые часы</h1>
      <WorldClockForm onAdd={handleAddClock} />
      <WorldClockList clocks={clocks} onRemove={handleRemoveClock} />
    </div>
  );
}

export default App;