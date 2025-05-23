import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "data",
    storage
}

const reducer = combineReducers({
    data: persistReducer(persistConfig, todos),
})

export default reducer