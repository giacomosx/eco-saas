import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    openModal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen: (state) => {
            state.openModal = !state.openModal
        }
    }
})

export const isModalOpen = state => state.modalState.openModal
export const {setModalOpen} = modalSlice.actions;
export default modalSlice.reducer;