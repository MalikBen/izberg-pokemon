import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from 'redux/favourites/favouritesSlice';
import { loadState, saveState } from 'services/localStorage/localStorage';

const persistedState = loadState();
const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
  preloadedState: {
    favourites: { favourites: persistedState },
  },
});

store.subscribe(() => saveState(store.getState().favourites.favourites));

export type RootState = ReturnType<typeof store.getState>;

export default store;
