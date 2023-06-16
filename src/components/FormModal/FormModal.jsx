import { useState } from "react";
import Switch from "react-switch";
import s from "../FormModal/FormModal.module.css";

const FormModal = () => {
  const [checked, setChecked] = useState(false);
  const [categories, setCategories] = useState("");
  const [money, setMoney] = useState(0);
  console.log(categories);
  console.log(money);

  const ChangeFormSwitch = (nextChecked) => {
    setChecked(nextChecked);
  };

  const handleChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  const handleChangeMoney = (e) => {
    setMoney(e.target.value);
  };

  return (
    <>
      <form className={s.form__module} action="">
        <Switch
          height={40}
          width={80}
          onChange={ChangeFormSwitch}
          checked={checked}
          className={s.react__switch}
          offColor="#4A56E2"
          offHandleColor="#FF6596"
        />

        {!checked && (
          <select
            name=""
            value={categories}
            onChange={handleChangeCategories}
            className={s.selectCategories}
          >
            <option className={s.initialSelected} value="">
              Выберите категорию
            </option>
            <option value="food">Еда</option>
            <option value="auto">Авто</option>
            <option value="children">Дети</option>
            <option value="haus">Дом</option>
            <option value="education">Образование</option>
            <option value="rest">Остальные</option>
          </select>
        )}

        <div className={s.inputPositionMoney}>
          <input
            className={s.inputMoney}
            value={money}
            onChange={handleChangeMoney}
            type="number"
            placeholder="0.00"
          />
          <input className={s.inputDate} type="date" name="date" id="" />
        </div>

        <input
          className={s.Form__Comments}
          type="text"
          name=""
          placeholder="Комментарий"
        />

        <div className={s.button__position}>
          <button className={s.button__add} type="submit">
            Добавить
          </button>
          <button className={s.button__cancel} type="submit">
            Отмена
          </button>
        </div>
      </form>
    </>
  );
};

export default FormModal;
