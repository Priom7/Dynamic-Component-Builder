
import React from 'react';

interface ModalProps {
  title: string;
  body: string;
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, body, show, onClose }) => {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
  