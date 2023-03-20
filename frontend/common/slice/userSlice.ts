import { createSlice } from '@reduxjs/toolkit'
import User from '../../models/user';
// import { USER } from '../../data/dummy-data';

export interface UserState {
    users: null | User[]
}

const initialState: UserState = {
    users: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;