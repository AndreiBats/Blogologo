import { StyledSearch, SearchButton, Input } from "./styles";

export const Search = () => {
  return (
    <StyledSearch>
      <Input type="search" placeholder="Search" />
      <SearchButton>Search</SearchButton>
    </StyledSearch>
  );
};
