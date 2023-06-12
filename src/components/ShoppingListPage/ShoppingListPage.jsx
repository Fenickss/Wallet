import s from "./ShoppingListPage.module.css";
import ShoppingBalance from "../ShoppingBalance";
import PriceConverter from "../PriceConverter/PriceConverter";
import TodoList from "../TodoList";

const ShoppingListPage = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
          <h1 className={s.logo}>Wallet</h1>
          <ul className={s.header__list}>
            <li>
              <a className={s.header__link} href="/">
                Имя
              </a>
            </li>
            <li>
              <a className={s.header__link} href="/">
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main className={s.main}>
        <div className={s.container__main}>
          <div className={s.nav__posicion}>
            <nav className={s.nav}>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <a className={s.nav__link} href="/">
                    Главная
                  </a>
                </li>
                <li className={s.nav__item}>
                  <a className={s.nav__link} href="/">
                    Статистика
                  </a>
                </li>
              </ul>
            </nav>
            <ShoppingBalance />
            <PriceConverter />
          </div>
          <TodoList />
        </div>
      </main>
    </>
  );
};

export default ShoppingListPage;
