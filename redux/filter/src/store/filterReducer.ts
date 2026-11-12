import { SET_SEARCH_TERM, CLEAR_SEARCH } from './types';
import type { ActionTypes } from './types';

const initialState = { searchTerm: '' };

export const filterReducer = (
  state = initialState,
  action: ActionTypes
): { searchTerm: string } => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload.searchTerm };
    case CLEAR_SEARCH:
      return { ...state, searchTerm: '' };
    default:
      return state;
  }
};