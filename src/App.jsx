// import RegistrationPage from "./components/RegistrationPage";

import { useState } from "react";
import ShoppingListPage from "./components/ShoppingListPage/ShoppingListPage";
import Modal from "./components/Modal";
import s from "./components/Modal/Modal.module.css";

import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ShoppingListPage />
      <button type="submit" onClick={() => setShowModal(true)}>
        Открыть модалку
      </button>
      {showModal && (
        <Modal>
          <h1>TEST</h1>
          <p>fsdf</p>
          <button
            className={s.button__closeModal}
            type="submit"
            onClick={() => setShowModal(false)}
          >
            Закрыть модалку
          </button>
        </Modal>
      )}
      {/* <InitialPage /> */}
      {/* <RegistrationPage /> */}
    </>
  );
};

export default App;
