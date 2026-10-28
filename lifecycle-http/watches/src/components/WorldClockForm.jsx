import { useState } from 'react';

function WorldClockForm({ onAdd }) {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Введите название города');
      return;
    }

    const tz = Number(timezone);
    if (timezone === '' || isNaN(tz) || tz < -12 || tz > 14) {
      setError('Введите корректную временную зону (от -12 до 14)');
      return;
    }

    onAdd(name.trim(), tz);
    setName('');
    setTimezone('');
    setError('');
  };

  return (
    <form className="clock-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Название</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например: Moscow"
        />
      </div>

      <div className="form-group">
        <label>Временная зона (UTC)</label>
        <input
          type="number"
          step="any"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          placeholder="Например: 3"
        />
      </div>

      <button type="submit" className="add-btn">Добавить</button>

      {error && <div className="error-msg">{error}</div>}
    </form>
  );
}

export default WorldClockForm;