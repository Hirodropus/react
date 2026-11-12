import { legacy_createStore as createStore, combineReducers } from 'redux';
import { servicesReducer } from './servicesReducer';
import { formReducer } from './formReducer';
import { filterReducer } from './filterReducer';

export const store = createStore(
  combineReducers({
    services: servicesReducer,
    form: formReducer,
    filter: filterReducer,
  })
);