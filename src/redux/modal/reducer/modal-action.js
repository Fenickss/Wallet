import { createAction } from "@reduxjs/toolkit";

const handleChangeCategories = createAction("dateModal/handleChangeCategories");

const handleChangeMoney = createAction("dateModal/handleChangeMoney");

const handleChangeDate = createAction("dateModal/handleChangeDate");

const handleChangeComments = createAction("dateModal/handleChangeComments");

export {
  handleChangeCategories,
  handleChangeMoney,
  handleChangeDate,
  handleChangeComments,
};
