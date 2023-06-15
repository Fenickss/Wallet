import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "../Modal/Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/modalSlice";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, handleKeyDown }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("escape redux");
      dispatch(closeModal());
    }
  };

  return createPortal(
    <div className={s.modal__backDrop}>
      <div className={s.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.array,
};
