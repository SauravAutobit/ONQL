import "./SearchBar.css";
import Form from "react-bootstrap/Form";
import search from "../../assets/icons/search.svg";

interface SearchBarProps {
  width?: string;
  background?: string;
  border?: string;
  placeholder?: string;
}

const SearchBar = ({
  width = "21%",
  background = "var(--header-bg-primary)",
  border = "1px solid var(--border-color-primary)",
  placeholder = "Search",
}: SearchBarProps) => {
  return (
    <div className="searchBar-container" style={{ width, border }}>
      <Form className="d-flex searchBar-form">
        <Form.Control
          type="search"
          placeholder={placeholder}
          className="searchBar-input"
          aria-label="Search"
          style={{ background }}
        />
      </Form>
      <img src={search} alt="searchIcon" />
    </div>
  );
};

export default SearchBar;
