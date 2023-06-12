import React from 'react';
import s from '../RegistrationPage/RegistrationPage.module.css';
import frameImg from '../../image/Frame2.png';

const RegistrationPage = () => {
  return (
    <section className="section">
      <div className={s.container}>
        <ul className={s.img__list}>
          <li className={s.img__itemLeft}>
            <div className={s.img__position}>
              <img
                className={s.img}
                src={frameImg}
                alt="изображение управления кошельком"
                width="700px  "
              />
              <h1 className={s.img__title}>Finance App</h1>
            </div>
          </li>
          <li className={s.img__itemRight}>
            <div className={s.finance__menu}>
              <p className={s.logo}>Wallet</p>
              <form className="form" action="">
                <div className="form__field">
                  <input
                    className={s.form__input}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  <label className="form-label" htmlFor="email"></label>
                </div>
                <div className={s.form__field}>
                  <input
                    className={s.form__input}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                  />
                  <label className="form-label" htmlFor="password"></label>
                  <div className={s.form__field}>
                    <input
                      className={s.form__input}
                      type="password"
                      name="password"
                      placeholder="Подтвердите пароль"
                    />
                    <label className="form-label" htmlFor="password"></label>
                  </div>
                  <div className={s.form__field}>
                    <input
                      className={s.form__input}
                      type="text"
                      name="name"
                      placeholder="Имя"
                    />
                    <label className="form-label" htmlFor="name"></label>
                  </div>
                  <button className={s.button__entry}>Вход</button>
                  <button className={s.button__registration}>
                    Регистрация
                  </button>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RegistrationPage;
