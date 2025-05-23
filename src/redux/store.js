import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer,
    middleware: (defaultMiddleware)=> {
        return defaultMiddleware({
            serializableCheck: {
                ignoreActions: ['persist/PERSIST']
            }
        })
    }
})

export const persistor = persistStore(store)