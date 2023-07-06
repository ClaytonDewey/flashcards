import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    addCards: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

export const selectCards = (state) => state.cards.cards;

export const { addCards } = cardsSlice.actions;

export default cardsSlice.reducer;
