import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as action from "./modal-action";

const categoriesReducer = createReducer("", {
  [action.handleChangeCategories]: (_, { payload }) => payload,
});

const moneyReducer = createReducer(0, {
  [action.handleChangeMoney]: (_, { payload }) => payload,
});

const dateReducer = createReducer(0, {
  [action.handleChangeDate]: (_, { payload }) => payload,
});

const commentsReducer = createReducer("", {
  [action.handleChangeComments]: (_, { payload }) => payload,
});

export default combineReducers({
  categories: categoriesReducer,
  money: moneyReducer,
  comments: commentsReducer,
  date: dateReducer,
});
