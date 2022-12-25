import { Component } from 'react';
import * as API from '../data/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalHits: null,
    isLoading: false,
    error: null,
  };
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        const images = await API.fetchImages(searchQuery, page);
        this.setState({ isLoading: true });
        this.setState(prevState => ({
          image: [...prevState.images, images.data],
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
    const { images, totalHits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}
