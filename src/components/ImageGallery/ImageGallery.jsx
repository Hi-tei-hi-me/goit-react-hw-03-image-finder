import PropTypes from 'prop-types';
import { GalleryImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

{
  /* <ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul> */
}

export const ImageGallery = ({ images }) => {
  return (
    <GalleryImageList>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
        );
      })}
    </GalleryImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string,
    }).isRequired
  ).isRequired,
};
