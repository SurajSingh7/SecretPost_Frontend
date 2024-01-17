import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import PaginationSlice from "../slices/PaginationSlice";


const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    pagination:PaginationSlice,
})


export default rootReducer;