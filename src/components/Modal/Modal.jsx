import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

/* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>; */

export class Modal extends Component {
  static defaultProps = {
    url: '',
    onEsc: null,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }
  handleEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onEsc();
    }
  };
  closeByBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onEsc();
    }
  };
  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.closeByBackdropClick}>
        <ModalWindow>
          <img src={url} alt={url} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
};
