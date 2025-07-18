import "./SearchBar.css";
import Form from "react-bootstrap/Form";
import search from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <Form className="d-flex searchBar-form">
        <Form.Control
          type="search"
          placeholder="Search"
          className="searchBar-input"
          aria-label="Search"
        />
      </Form>
      <img src={search} alt="searchIcon" />
    </div>
  );
};

export default SearchBar;
