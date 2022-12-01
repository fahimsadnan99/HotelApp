import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import RoomSlice from "./RoomSlice";




const persistConfig = {
    key: "root",
    version : 1,
     storage,
}

const reducer = combineReducers({
    room : RoomSlice
})
 

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    
    reducer :  persistedReducer
})

