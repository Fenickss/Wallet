import s from "./ShoppingBalance.module.css";

const ShoppingBalance = () => {
  return (
    <>
      <div className={s.balance}>
        <div className={s.balance__posicion}>
          <p className={s.balance__text}>Ваш баланс</p>
          <span className={s.balance__number}>{"24000.00"}</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingBalance;
