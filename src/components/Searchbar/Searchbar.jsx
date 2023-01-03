import { Component } from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { Header, SearchForm, SearchBtn, SearchBtnLabel, SearchFormInput } from './Searchbar.styled';
import { showToast } from 'utils/toaster';

/* <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>; */

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleChange = evt => {
    this.setState({ searchQuery: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = this.state.searchQuery.trim().toLowerCase();
    if (!searchQuery) {
      showToast('You should enter keyword if you want to find something', 'incorrectQuery');
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.setState({ searchQuery: '' });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SearchBtnLabel>Search</SearchBtnLabel>
            <RiSearchEyeLine size={25} />
          </SearchBtn>
          <SearchFormInput
            type="text"
            autoFocus
            autocomplete="off"
            placeholder="Search images of..."
            value={searchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
