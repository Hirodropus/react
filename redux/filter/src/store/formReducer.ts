import {
  SET_FORM_FIELD,
  START_EDITING,
  CANCEL_EDITING,
  CLEAR_FORM,
  SET_VALIDATION_ERROR,
} from './types';
import type { ActionTypes, RootState } from './types';

type FormState = RootState['form'];

const emptyForm: FormState = {
  name: '',
  price: '',
  editingId: null,
  errors: {},
};

const initialState: FormState = { ...emptyForm };

export const formReducer = (
  state = initialState,
  action: ActionTypes
): FormState => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        // при вводе сбрасываем ошибку для этого поля
        errors: { ...state.errors, [action.payload.field]: undefined },
      };

    case START_EDITING:
      return {
        name: action.payload.service.name,
        price: String(action.payload.service.price),
        editingId: action.payload.service.id,
        errors: {},
      };

    case CANCEL_EDITING:
    case CLEAR_FORM:
      return { ...emptyForm, errors: {} };

    case SET_VALIDATION_ERROR:
      return {
        ...state,
        errors: { ...state.errors, [action.payload.field]: action.payload.error },
      };

    default:
      return state;
  }
};