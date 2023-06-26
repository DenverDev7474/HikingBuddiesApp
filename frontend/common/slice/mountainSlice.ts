import { createSlice } from '@reduxjs/toolkit'
import Mountain from '../../models/mountain'
// import { MOUNTAINS } from '../../data/dummy-data'
// import MountainsData from '../../data/StaticData/mountainsData.json'


export interface MountainState {
    mountains: null | Mountain[]
}

const initialState: MountainState = {
    mountains: null,
}

const mountainSlice = createSlice({
    name: 'mountain',
    initialState,
    reducers: {}
})

export default mountainSlice.reducer;