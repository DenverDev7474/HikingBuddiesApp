import { createSlice } from '@reduxjs/toolkit';
import Route from '../../models/route';
// import RouteData from '../../data/StaticData/routesData.json'


export interface RouteState {
    routes: null | Route[]
};

const initialState: RouteState = {
    routes: null,
};

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
    }
});

export default routeSlice.reducer;