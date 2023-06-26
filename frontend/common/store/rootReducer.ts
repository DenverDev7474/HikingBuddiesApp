import { combineReducers } from "@reduxjs/toolkit";
import hikeReducer from "../slice/hikeSlice";
import mountainReducer from "../slice/mountainSlice";
import routeReducer from "../slice/routeSlice";
import userReducer from "../slice/userSlice";


const rootReducer = combineReducers({
    hikeState: hikeReducer,
    mountainState: mountainReducer,
    routeState: routeReducer,
    userState: userReducer
})

export default rootReducer;