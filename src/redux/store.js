import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import userReducer from "./UserRedux";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig={
    key: 'root',
    version: 1,
    storage,
}
const rootReducer=combineReducers({user:userReducer,cart:cartReducer});
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store= configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});
export let persistor= persistStore(store);