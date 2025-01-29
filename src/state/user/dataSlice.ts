import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { staticData } from '@/data/staticData';

interface DataState {
  users: { 
    name: string;
    email: string,
    password: string,
    balance: number,
    activity: {
      id: string,
      title: string,
      type: string,
      date: string,
      amount: string,
    }
  }[] 
}

const initialState: DataState = {
  users: staticData.users,
};

export const fetchData = createAsyncThunk('data/fetchData', () => {
  return staticData as { 
    users: { 
      name: string;
      email: string,
      password: string,
      balance: number,
      activity: {
        id: string,
        title: string,
        type: string,
        date: string,
        amount: string,
      }
    }[] 
  };
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.users = action.payload.users;
    });
  },
});

export default dataSlice.reducer;