import { Search, SearchList, SearchPagination } from "components";
import { useInput } from "hooks/useInput";
import { StyledSearchPage } from "./styles";

export const SearchPage = () => {
  const searchInput = useInput();

  return (
    <StyledSearchPage>
      <Search {...searchInput} />
      <SearchList {...searchInput} />
      <SearchPagination value={searchInput.value} />
    </StyledSearchPage>
  );
};
