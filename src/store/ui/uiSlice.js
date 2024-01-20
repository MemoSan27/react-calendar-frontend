import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (currentValue) => {
            currentValue.isDateModalOpen = true;
        },
        onCloseDateModal: (currentValue) => {
            currentValue.isDateModalOpen = false;
        },
        
        
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
