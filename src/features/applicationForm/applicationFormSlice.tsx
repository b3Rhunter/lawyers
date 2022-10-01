import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

export interface ApplicationFormState {
  open: boolean;
}

const initialState: ApplicationFormState = {
  open: false,
};

export const applicationFormSlice = createSlice({
  name: 'applicationForm',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggle } = applicationFormSlice.actions;

export const selectOpen = (state: RootState) => state.applicationForm.open;

export default applicationFormSlice.reducer;
