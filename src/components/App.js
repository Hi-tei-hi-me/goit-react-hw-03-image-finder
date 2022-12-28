import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../data/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const INITIAL_STATE = {
  searchQuery: '',
  images: [],
  page: 1,
  totalHits: null,
  isLoading: false,
  error: null,
};

export class App extends Component {
  state = { ...INITIAL_STATE };
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        const images = await API.fetchImages(searchQuery, page);
        this.setState({ isLoading: true });
        this.setState(prevState => ({
          images: [...prevState.images, ...images.data],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ isLoading: false });
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmit = data => {
    this.setState({
      searchQuery: data.searchQuery,
      images: [],
    });
  };
  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <Searchbar onSubmit={this.onSubmit} />
        {images.length > 0 && !isLoading && <ImageGallery images={images} />}
        {images.length === 0 &&
          !isLoading &&
          !error &&
          toast(`Sorry, we couldn't find anything`, {
            icon: '☹',
            style: {
              background: '#4a81e8',
              color: '#fff',
            },
          })}
        {isLoading && <p>Loading...</p>},
        {error && (
          <p
            style={{
              margin: '0 auto',
              width: '95vw',
              maxWidth: '350px',
              padding: '20px 40px',
              textAlign: 'center',
              lineHeight: '1.71',
              backgroundColor: '#aa3939',
              color: '#ffaaaa',
              border: '1.5px solid #801515',
              borderRadius: '10px',
            }}>
            Oops! Something's wrong:
            <br />❌ {error.message}
            <br />
            Please, try refreshing this page
          </p>
        )}
      </>
    );
  }
}
