import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as action from "./modal-action";

const categoriesReducer = createReducer("", {
  [action.handleChangeCategories]: (_, { payload }) => payload,
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
