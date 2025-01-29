import { createSlice } from '@reduxjs/toolkit';
import { staticUserListData } from '@/data/userListData';

interface UserListState {
  users: {
    id: number;
    name: string;
    email: string,
    password: string,
    balance: number,
    activities: {
      id: string,
      title: string,
      type: string,
      date: string,
      amount: string,
    }[]
  }[]
}

const initialState: UserListState = {
  users: staticUserListData.users,
};

const dataSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;