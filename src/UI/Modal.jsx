import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"

const BackDrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose}></BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      <div>Modal</div>
    </Fragment>
  );
};

export default Modal;
