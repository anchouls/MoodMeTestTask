import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './reducers/pageSlice';
import filterReducer from './reducers/filterSlice';
import statReducer from './reducers/statSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    filter: filterReducer,
    stat: statReducer
  },
});
