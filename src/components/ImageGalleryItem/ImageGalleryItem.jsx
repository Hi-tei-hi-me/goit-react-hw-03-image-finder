import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

{
  /* <li class="gallery-item">
  <img src="" alt="" />
</li>; */
}

export const ImageGalleryItem = {
  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
        <GalleryItem>
          <Image src={webformatURL} alt={webformatURL} onClick={this.onOpen} />
        </GalleryItem>
    );
  },
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
