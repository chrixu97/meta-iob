import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface operatorState {
  value: string;
}

const initialState: operatorState = {
  value: '',
};

const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    setOperatorState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  }
});

export const { setOperatorState } = operatorSlice.actions;
export default operatorSlice.reducer;