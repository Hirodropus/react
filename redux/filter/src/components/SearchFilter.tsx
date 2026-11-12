import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/types';
import { setSearchTerm, clearSearch } from '../store/actionCreators';

export const SearchFilter: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    dispatch(clearSearch());
    inputRef.current?.focus();
  };

  return (
    <div className="search-filter">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        placeholder="Поиск услуг..."
      />
      {searchTerm && (
        <button className="btn-clear" onClick={handleClear} title="Очистить">
          ✕
        </button>
      )}
    </div>
  );
};