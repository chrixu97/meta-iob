import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoggedUserState {
  user: {
    id: number;
    name: string;
    email: string,
    password: string,
    balance: number,
    activities:{
      id: string,
      title: string,
      type: string,
      date: string,
      amount: string,
    }[]
  },
}

const initialState: LoggedUserState = {
  user: {
    id: -1,
    name: '',
    email: '',
    password: '',
    balance: 0,
    activities: [],
  },
};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoggedUserState['user']>) {
      console.log('setUser:', state.user);
      state.user = action.payload;
    },
    logout(state) {
      console.log('logout:', state.user);
      state.user = initialState.user;
    },
  }
});

export const { setUser, logout } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;