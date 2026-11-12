export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface FormErrors {
  name?: string;
  price?: string;
}

export interface RootState {
  services: { items: Service[] };
  filter: { searchTerm: string };
  form: {
    name: string;
    price: string;
    editingId: string | null;
    errors: FormErrors;
  };
}

export const ADD_SERVICE = 'ADD_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const START_EDITING = 'START_EDITING';
export const CANCEL_EDITING = 'CANCEL_EDITING';
export const CLEAR_FORM = 'CLEAR_FORM';
export const SET_VALIDATION_ERROR = 'SET_VALIDATION_ERROR';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export interface AddServiceAction {
  type: typeof ADD_SERVICE;
  payload: { name: string; price: number };
}
export interface UpdateServiceAction {
  type: typeof UPDATE_SERVICE;
  payload: { id: string; name: string; price: number };
}
export interface DeleteServiceAction {
  type: typeof DELETE_SERVICE;
  payload: { id: string };
}
export interface SetFormFieldAction {
  type: typeof SET_FORM_FIELD;
  payload: { field: 'name' | 'price'; value: string };
}
export interface StartEditingAction {
  type: typeof START_EDITING;
  payload: { service: Service };
}
export interface CancelEditingAction {
  type: typeof CANCEL_EDITING;
}
export interface ClearFormAction {
  type: typeof CLEAR_FORM;
}
export interface SetValidationErrorAction {
  type: typeof SET_VALIDATION_ERROR;
  payload: { field: 'name' | 'price'; error?: string };
}
export interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: { searchTerm: string };
}
export interface ClearSearchAction {
  type: typeof CLEAR_SEARCH;
}

export type ActionTypes =
  | AddServiceAction | UpdateServiceAction | DeleteServiceAction
  | SetFormFieldAction | StartEditingAction | CancelEditingAction
  | ClearFormAction | SetValidationErrorAction
  | SetSearchTermAction | ClearSearchAction;