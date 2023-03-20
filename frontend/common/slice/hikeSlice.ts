import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Hike from '../../models/hike';

export interface HikeState {
    hikesAvailable: null | Hike[]
}

const initialState: HikeState = {
    hikesAvailable: null
}


export const hikeSlice = createSlice({
    name: 'hike',
    initialState,
    reducers: {
    }
})

export default hikeSlice.reducer;