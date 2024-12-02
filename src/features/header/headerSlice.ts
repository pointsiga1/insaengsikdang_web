import { createSlice } from '@reduxjs/toolkit';

interface HeaderType {
  header: string;
  value: number;
}

const initialState: HeaderType = {
  header: '',
  value: 0,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderText: (state, action) => {
      state.header = action.payload;
    },
  },
});

export const { setHeaderText } = headerSlice.actions;
export default headerSlice.reducer;


