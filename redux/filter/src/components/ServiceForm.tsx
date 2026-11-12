import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/types';
import {
  addService,
  updateService,
  setFormField,
  cancelEditing,
  setValidationError,
} from '../store/actionCreators';
import { validateForm } from '../utils/validation';

export const ServiceForm: React.FC = () => {
  const dispatch = useDispatch();
  const { name, price, editingId, errors } = useSelector(
    (state: RootState) => state.form
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(name, price);

    if (validationErrors.name) {
      dispatch(setValidationError('name', validationErrors.name));
    }
    if (validationErrors.price) {
      dispatch(setValidationError('price', validationErrors.price));
    }

    if (Object.keys(validationErrors).length > 0) return;

    if (editingId) {
      dispatch(updateService(editingId, name.trim(), Number(price)));
    } else {
      dispatch(addService(name.trim(), Number(price)));
    }
    dispatch(cancelEditing()); // очищает форму
  };

  const handleCancel = () => dispatch(cancelEditing());

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <h2>{editingId ? 'Редактирование услуги' : 'Добавление услуги'}</h2>

      <div className="field">
        <label htmlFor="name">Название услуги</label>
        <input
          id="name"
          value={name}
          onChange={(e) => dispatch(setFormField('name', e.target.value))}
          placeholder="Введите название"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="price">Цена</label>
        <input
          id="price"
          value={price}
          onChange={(e) => dispatch(setFormField('price', e.target.value))}
          placeholder="Введите цену"
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>

      <div className="buttons">
        <button type="submit" className="btn-save">
          Save
        </button>
        {editingId && (
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};