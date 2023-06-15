import { useDispatch, useSelector } from "react-redux";

import s from "./ShoppingListPage.module.css";
import ShoppingBalance from "../ShoppingBalance";
import PriceConverter from "../PriceConverter/PriceConverter";
import TodoList from "../TodoList";

import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/ai";

import Modal from "../Modal";
import { openModal, closeModal } from "../../redux/modal/modalSlice";

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
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
          <button
            className={s.button__openModal}
            type="submit"
            onClick={() => dispatch(openModal())}
          >
            <VscChromeClose className={s.modal__iconAdd} />
          </button>
          {isOpen && (
            <Modal>
              <h1>TEST</h1>
              <p>fsdf</p>
              <button
                className={s.button__closeModal}
                type="submit"
                onClick={() => dispatch(closeModal())}
              >
                <MdOutlineClose className={s.modal__iconClose} />
              </button>
            </Modal>
          )}
        </div>
      </main>
    </>
  );
};

export default ShoppingListPage;
