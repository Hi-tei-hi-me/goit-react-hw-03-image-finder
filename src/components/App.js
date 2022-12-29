import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../data/api';
import { AppWrap } from './Wrapper/AppWrap.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const INITIAL_STATE = {
  searchQuery: '',
  images: [],
  page: 1,
  totalHits: null,
  isLoading: false,
  error: false,
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
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error });
      this.setState({ isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const images = await API.fetchImages(searchQuery, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...images.data],
          totalHits: images.totalHits,
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error });
        this.setState({ isLoading: false });
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
        {images.length > 0 && !isLoading && (
          <AppWrap>
            <ImageGallery images={images} />
            {totalPages > page && <Button onClick={this.loadMore} />}
          </AppWrap>
        )}
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
        {isLoading && !error && <Loader />}
        {error && !isLoading && (
          <p
            style={{
              margin: '40px auto',
              width: 'max-content',
              maxWidth: '95vw',
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
            Please, refresh this page or try again later
          </p>
        )}
      </>
    );
  }
}
