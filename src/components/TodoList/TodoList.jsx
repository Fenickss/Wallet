import React from 'react';
import s from './TodoList.module.css';

const TodoList = () => {
  return (
    <>
      <div className={s.todoList__position}>
        <div className={s.header__todoList}>
          <ul className={s.todoList__list}>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Дата</p>
            </li>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Тип</p>
            </li>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Категория</p>
            </li>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Комментарий</p>
            </li>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Сумма</p>
            </li>
            <li className={s.todoList__item}>
              <p className={s.todoList__text}>Баланс</p>
            </li>
          </ul>
        </div>

        <div className={s.todoListMain__position}>
          <ul className={s.todoListMain__list}>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>04.01.19</p>
            </li>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>-</p>
            </li>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>Разное</p>
            </li>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>Подарок жене</p>
            </li>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>300.00</p>
            </li>
            <li className={s.todoListMain__item}>
              <p className={s.todoListMain__text}>6 900.00</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
