import { configureStore } from '@reduxjs/toolkit';
import { urbanApi } from './services/urbanApi';

export const store = configureStore({
  reducer: {
    [urbanApi.reducerPath]: urbanApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(urbanApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
