import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  favourites: number[]
}

const initialState: IInitialState = {
  favourites: []
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const index = state.favourites.indexOf(action.payload);
      if (index > -1) {
        state.favourites.splice(index, 1);
        return;
      }
      state.favourites.push(action.payload)
    }
  }
});

export const { toggleFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
