import { Component } from 'react';
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
    if (evt.target.value.trim() === '') {
      return;
    }
    this.setState({ searchQuery: evt.target.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
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
