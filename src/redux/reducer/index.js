import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "tasks",
    storage
}

const reducer = combineReducers({
    tasks: persistReducer(persistConfig, todos),
})

export default reducer