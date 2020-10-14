import React from 'react';

const Modal = props => {

  return (
    <>
      <div className={`modal fade + ${props.modalSwitch}`} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Disclaimer</h5>
            </div>
            <div className="modal-body">
              This is a demo site. No real purchases will be made.
            </div>
            <div className="modal-footer">
              <button type="button" onClick={props.changeModal} className="btn btn-primary">I understand</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
