import axios from 'axios';

const PIXABAY_KEY = '30808706-03d9568f6e15a5d7585f5680b';
axios.defaults.baseURL = 'https://pixabay.com/api';
// pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const totalHits = response.data.totalHits;
  const data = response.data.hits.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
  return { totalHits, data };
};
