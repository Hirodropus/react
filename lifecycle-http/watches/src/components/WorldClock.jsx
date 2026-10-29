function WorldClock({ clock, onRemove, currentTime }) {
  const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + clock.timezone * 3600000);

  const hours = cityTime.getHours();
  const minutes = cityTime.getMinutes();
  const seconds = cityTime.getSeconds();

  const secondsDegrees = seconds * 6;
  const minutesDegrees = minutes * 6 + seconds * 0.1;
  const hoursDegrees = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="clock-container">
      <h3 className="clock-title">{clock.name}</h3>

      <div className="clock-wrapper">
        <div className="analog-clock">
          <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
          <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
          <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
          <div className="center-dot" />
        </div>

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