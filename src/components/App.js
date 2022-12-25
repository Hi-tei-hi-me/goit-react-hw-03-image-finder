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
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const images = await API.fetchImages(this.state.searchQuery);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  onSubmit = data => {
    this.setState({
      searchQuery: data,
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
