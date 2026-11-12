import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/types';
import {
  startEditing,
  deleteService,
  cancelEditing,
} from '../store/actionCreators';

export const ServiceList: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.services.items);
  const editingId = useSelector((state: RootState) => state.form.editingId);

  const handleDelete = (id: string) => {
    // Если удаляется редактируемая услуга — сбрасываем форму
    if (id === editingId) {
      dispatch(cancelEditing());
    }
    dispatch(deleteService(id));
  };

  return (
    <div className="service-list">
      <h2>Услуги (всего: {items.length})</h2>

      {items.length === 0 ? (
        <p className="empty">Услуг пока нет</p>
      ) : (
        <ul>
          {items.map((service) => (
            <li
              key={service.id}
              className={service.id === editingId ? 'editing' : ''}
            >
              <span className="name">{service.name}</span>
              <span className="price">{service.price} ₽</span>
              <div className="actions">
                <button onClick={() => dispatch(startEditing(service))}>
                  Редактировать
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(service.id)}
                  title="Удалить"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};