import { useState, useEffect } from 'react';
import WorldClockForm from './components/WorldClockForm';
import WorldClockList from './components/WorldClockList';
import './App.css';

function App() {
  const [clocks, setClocks] = useState([]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleAddClock = (name, timezone) => {
    const newClock = {
      id: Date.now().toString(),
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
      {/* Передаем текущее время в список */}
      <WorldClockList
        clocks={clocks}
        onRemove={handleRemoveClock}
        currentTime={currentTime}
      />
    </div>
  );
}

export default App;