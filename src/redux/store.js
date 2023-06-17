import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";
import modalReducer from "./modal/reducer/modal-reducer";

const store = configureStore({
  reducer: {
    toggleModal: modalSlice,
    dateModal: modalReducer,
  },
});

export default store;
