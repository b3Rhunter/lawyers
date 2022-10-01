import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import applicationFormSlice from '../features/applicationForm/applicationFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    applicationForm: applicationFormSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;