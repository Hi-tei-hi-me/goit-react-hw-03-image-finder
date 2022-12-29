import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

/* <li class="gallery-item">
<img src="" alt="" />
</li>; */

export class ImageGalleryItem extends Component {
  static defaultProps = {
    webformatURL: '',
    largeImageURL: '',
  };
  state = {
    isModalOpen: false,
  };
  modalOpen = () => {
    this.setState({ isModalOpen: true });
  };
  modalClose = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem>
          <Image src={webformatURL} alt={webformatURL} onClick={this.modalOpen} />
        </GalleryItem>
        {isModalOpen && <Modal url={largeImageURL} onEsc={this.modalClose} />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
