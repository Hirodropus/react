import WorldClock from './WorldClock';

function WorldClockList({ clocks, onRemove }) {
  if (clocks.length === 0) {
    return <p className="empty-message">Добавьте часы, чтобы увидеть время.</p>;
  }

  return (
    <div className="clock-list">
      {clocks.map((clock) => (
        <WorldClock key={clock.id} clock={clock} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default WorldClockList;