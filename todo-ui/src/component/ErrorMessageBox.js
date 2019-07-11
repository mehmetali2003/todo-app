import React from 'react';

class ErrorMessageBox extends React.Component {

  render() {

    return (
      <div className={`modal ${(this.props.messageType === 1) ? 'show' : ''}`} style={{ display: (this.props.messageType === 1) ? 'block' : 'none' }}
        id="modalConf" tabIndex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="modalConf-header-label">Error</h3>
              <button onClick={this.props.toggleErrorMsgBox} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.message}
            </div>
            <div className="modal-footer">
              <div className="modal-actions">
                <button type="button" color="secondary" onClick={this.props.toggleErrorMsgBox}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}




export default ErrorMessageBox;