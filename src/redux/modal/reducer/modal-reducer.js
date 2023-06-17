import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions from "./modal-action";

const categories = createReducer("", {});

const money = createReducer(0, {});

const comments = createReducer("", {});

const date = createReducer(0, {});

export default combineReducers({
  categories,
  money,
  comments,
  date,
});
