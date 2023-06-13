import PropTypes from "prop-types";

import s from "../Modal/Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={s.modal__backDrop}>
      <div className={s.modal__content}>{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.array,
};
