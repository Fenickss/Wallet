import { combineReducers, createReducer } from "@reduxjs/toolkit";
import handleChangeCategories from "../reducer/modal-action";

const categoriesReducer = createReducer("", {
  [handleChangeCategories]: (state, { payload }) => state + payload,
});

const moneyReducer = createReducer(0, {});

const commentsReducer = createReducer("", {});

const dateReducer = createReducer(0, {});

export default combineReducers({
  categories: categoriesReducer,
  money: moneyReducer,
  comments: commentsReducer,
  date: dateReducer,
});
