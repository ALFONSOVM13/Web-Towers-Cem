import { configureStore } from '@reduxjs/toolkit';

import { uiSlice } from './ui';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    },

});

export const selectState = store.getState;
export const dispatch = store.dispatch;
