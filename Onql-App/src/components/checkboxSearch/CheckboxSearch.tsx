import "./CheckboxSearch.css";
import SearchBar from "../searchBar/SearchBar";
import CheckBox from "../checkBox/CheckBox";

const CheckboxSearch = () => {
  return (
    <>
      <div className="CheckboxSearch-checkbox-search">
        <div className="CheckboxSearch-header">
          <div className="CheckboxSearch-all-checkbox">
            <CheckBox text="Check all" />
          </div>
          <p>Drop</p>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default CheckboxSearch;
