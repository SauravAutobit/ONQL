import "./CheckboxSearch.css";
import SearchBar from "../searchBar/SearchBar";
import Checkbox from "@mui/material/Checkbox";

const CheckboxSearch = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="CheckboxSearch-checkbox-search">
        <div className="CheckboxSearch-header">
          <div className="CheckboxSearch-all-checkbox">
            <Checkbox {...label} />
            <p>Check all</p>
          </div>
          <p>Drop</p>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default CheckboxSearch;
