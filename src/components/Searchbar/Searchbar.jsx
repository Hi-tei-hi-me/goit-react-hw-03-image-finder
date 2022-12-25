import { RiSearchEyeLine } from 'react-icons/ri';
import { Header, SearchForm, SearchBtn, SearchBtnLabel, SearchFormInput } from './Searchbar.styled';

{
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
}

export const Searchbar = ({ onSubmit }) => {
  const initialValues = {
    searchQuery: '',
  };

  const handleSubmit = value => {
    if (value.searchQuery.trim() === '') {
      return;
    }
    onSubmit(value.searchQuery.toLowerCase());
  };

  return (
    <Header>
      <SearchForm initialValues={initialValues}>
        <SearchBtn type="submit" onSubmit={handleSubmit}>
          <SearchBtnLabel>Search</SearchBtnLabel>
          <RiSearchEyeLine size={25} />
        </SearchBtn>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autoFocus
          autocomplete="off"
          id="searchQuery"
          placeholder="Search images of..."
        />
      </SearchForm>
    </Header>
  );
};
