import { combineReducers, createReducer } from "@reduxjs/toolkit";

const checked = createReducer(false, {});

const categories = createReducer("", {});

const money = createReducer(0, {});

const comments = createReducer("", {});

const date = createReducer(0, {});

export default combineReducers({
  checked,
  categories,
  money,
  comments,
  date,
});
