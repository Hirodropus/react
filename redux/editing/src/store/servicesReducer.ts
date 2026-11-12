import { nanoid } from 'nanoid';
import { ADD_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from './types';
import type { ActionTypes, Service } from './types';

const initialState: { items: Service[] } = { items: [] };

export const servicesReducer = (
  state = initialState,
  action: ActionTypes
): { items: Service[] } => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        items: [
          ...state.items,
          { id: nanoid(), name: action.payload.name, price: action.payload.price },
        ],
      };
    case UPDATE_SERVICE:
      return {
        items: state.items.map((s) =>
          s.id === action.payload.id
            ? { ...s, name: action.payload.name, price: action.payload.price }
            : s
        ),
      };
    case DELETE_SERVICE:
      return {
        items: state.items.filter((s) => s.id !== action.payload.id),
      };
    default:
      return state;
  }
};