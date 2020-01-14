import React from 'react';
import './PinForm.scss';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImage: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ pinImage: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImage,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from savePin', err));
  }

  render() {
    const { pinTitle, pinImage } = this.state;

    return (
            <form className="PinForm">
              <div classNAme="form-group">
                <label htmlFor="pin-title">Pin Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="pin-title"
                  placeholder="Enter pin name"
                  value={pinTitle}
                  onChange={this.nameChange}
                  />
                  <label htmlFor="pin-image">Pin Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="pin-image"
                  placeholder="www.urpichere.com"
                  value={pinImage}
                  onChange={this.imageChange}
                  />
                </div>
                <button className="btn btn-dark" onClick={this.savePinEvent}>Save Pin</button>
            </form>
    );
  }
}

export default PinForm;
