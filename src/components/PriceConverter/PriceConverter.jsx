import React from 'react';
import s from './PriceConverter.module.css';

const PriceConverter = () => {
  return (
    <>
      <div className={s.priceConverter}>
        <div className={s.priceConverter__header}>
          <ul className={s.priceConverter__list}>
            <li className={s.priceConverter__item}>
              <p className={s.priceConverter__title}>Валюта</p>
            </li>
            <li className={s.priceConverter__item}>
              <p className={s.priceConverter__title}>Покупка</p>
            </li>
            <li className={s.priceConverter__item}>
              <p className={s.priceConverter__title}>Продажа</p>
            </li>
          </ul>
        </div>
        <div className={s.priceConverter__main}>
          <ul className={s.currencies__list}>
            <li className={s.currencies__item}>
              <p className={s.currencies__text}>USD</p>
            </li>
            <li className={s.currencies__item}>
              <p className={s.currencies__text}>EUR</p>
            </li>
            <li className={s.currencies__item}>
              <p className={s.currencies__text}>RUB</p>
            </li>
          </ul>

          <ul className={s.buyingСurrency__list}>
            <li className={s.buyingСurrency__item}>
              <p className={s.buyingСurrency__text}>27.55</p>
            </li>
            <li className={s.buyingСurrency__item}>
              <p className={s.buyingСurrency__text}>30.00</p>
            </li>
            <li className={s.buyingСurrency__item}>
              <p className={s.buyingСurrency__text}>00.00</p>
            </li>
          </ul>

          <ul className={s.saleСurrency__list}>
            <li className={s.saleСurrency__item}>
              <p className={s.saleСurrency__text}>27.65</p>
            </li>
            <li className={s.saleСurrency__item}>
              <p className={s.saleСurrency__text}>30.10</p>
            </li>
            <li className={s.saleСurrency__item}>
              <p className={s.saleСurrency__text}>00.00</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PriceConverter;
