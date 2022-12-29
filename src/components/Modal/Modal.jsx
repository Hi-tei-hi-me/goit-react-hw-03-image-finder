import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

/* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>; */

export class Modal extends Component {
  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.onCloseBackdrop}>
        <ModalWindow>
          <img src={url} alt={url} width="900" height="680" />
        </ModalWindow>
      </Overlay>
    );
  }
}
