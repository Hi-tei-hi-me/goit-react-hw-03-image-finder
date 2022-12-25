import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

/* <li class="gallery-item">
<img src="" alt="" />
</li>; */

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt={webformatURL} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
