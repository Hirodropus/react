import { useState, useEffect } from 'react';

function WorldClock({ clock, onRemove }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const now = time;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + clock.timezone * 3600000);

  const hours = cityTime.getHours();
  const minutes = cityTime.getMinutes();
  const seconds = cityTime.getSeconds();

  const secondsDegrees = seconds * 6;
  const minutesDegrees = minutes * 6 + seconds * 0.1;
  const hoursDegrees = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="clock-container">
      {}
      <h3 className="clock-title">{clock.name}</h3>

      {}
      <div className="clock-wrapper">
        <div className="analog-clock">
          <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }}></div>
          <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }}></div>
          <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
          <div className="center-dot"></div>
        </div>

        {}
        <button className="remove-btn" onClick={() => onRemove(clock.id)}>
          ✕
        </button>
      </div>

      <div className="digital-time">
        {cityTime.toLocaleTimeString('ru-RU', { hour12: false })}
      </div>
    </div>
  );
}

export default WorldClock;