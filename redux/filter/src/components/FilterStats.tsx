import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilterStats } from '../store/selectors';

export const FilterStats: React.FC = () => {
  const { found, total } = useSelector(selectFilterStats);
  if (total === 0) return null;

  return (
    <div className="filter-stats">
      Найдено: <strong>{found}</strong> из <strong>{total}</strong> услуг
    </div>
  );
};