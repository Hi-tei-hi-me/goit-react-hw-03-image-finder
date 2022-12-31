import { Component } from 'react';
import toast from 'react-hot-toast';
import { RiSearchEyeLine } from 'react-icons/ri';
import { Header, SearchForm, SearchBtn, SearchBtnLabel, SearchFormInput } from './Searchbar.styled';

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
      toast('You should enter keyword if you want to find something', {
        icon: '⚠',
        style: {
          background: '#f3dc5d',
        },
      });
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
