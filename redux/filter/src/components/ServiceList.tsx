import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/types';
import { startEditing, deleteService, cancelEditing } from '../store/actionCreators';
import { selectFilteredServices } from '../store/selectors';
import { SearchFilter } from './SearchFilter';
import { FilterStats } from './FilterStats';

export const ServiceList: React.FC = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredServices);
  const totalItems = useSelector((state: RootState) => state.services.items.length);
  const editingId = useSelector((state: RootState) => state.form.editingId);

  const handleDelete = (id: string) => {
    if (id === editingId) dispatch(cancelEditing());
    dispatch(deleteService(id));
  };

  return (
    <div className="service-list">
      <h2>Услуги (всего: {totalItems})</h2>

      <SearchFilter />
      <FilterStats />

      {totalItems === 0 ? (
        <p className="empty">Услуг пока нет</p>
      ) : filteredItems.length === 0 ? (
        <p className="empty">Услуги не найдены</p>
      ) : (
        <ul>
          {filteredItems.map((service) => (
            <li key={service.id} className={service.id === editingId ? 'editing' : ''}>
              <span className="name">{service.name}</span>
              <span className="price">{service.price} руб.</span>
              <div className="actions">
                <button onClick={() => dispatch(startEditing(service))}>Редактировать</button>
                <button className="btn-delete" onClick={() => handleDelete(service.id)} title="Удалить">✕</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};