import { legacy_createStore as createStore, combineReducers } from 'redux';
import { servicesReducer } from './servicesReducer';
import { formReducer } from './formReducer';

export const store = createStore(
  combineReducers({
    services: servicesReducer,
    form: formReducer,
  })
);