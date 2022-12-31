import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../data/api';
import { AppWrap } from './Wrapper/AppWrap.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

const INITIAL_STATE = {
  searchQuery: '',
  images: [],
  page: 1,
  totalHits: null,
  isLoading: false,
  error: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const images = await API.EditorsChoiceImages();
      this.setState({
        images: [...images.data],
        totalHits: images.totalHits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: '' });
        const images = await API.fetchImages(searchQuery, page);
        if (!images.data.length) {
          toast(`Sorry, we couldn't find any ${searchQuery}`, {
            icon: '☹',
            style: {
              background: '#4a81e8',
              color: '#fff',
            },
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.data],
          totalHits: images.totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmit = ({ searchQuery }) => {
    if (searchQuery === this.state.searchQuery) {
      toast(
        `There are no another ${searchQuery} images for you, but you can try to find something else`,
        {
          icon: '🤷',
          style: {
            background: '#de6a0a',
            color: '#fff',
          },
        }
      );
      return;
    }
    this.setState({
      searchQuery,
      images: [],
      page: 1,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, totalHits, page, isLoading, error } = this.state;
    const totalPages = totalHits / 12;
    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <AppWrap>
          <Searchbar onSubmit={this.onSubmit} />
        </AppWrap>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <AppWrap>
            <ImageGallery images={images} />
            {totalPages > page && <Button onClick={this.loadMore} />}
          </AppWrap>
        )}
        {error && <Error textError={error} />}
      </>
    );
  }
}
