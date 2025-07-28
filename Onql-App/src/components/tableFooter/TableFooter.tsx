import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./TableFooter.css";

const TableFooter = () => {
  return (
    <div className="tableFooter-container">
      <Button
        btnText={"Preview ONQL"}
        width={100}
        height={38}
        color="var(--sidebar-bg-primary)"
        background="white"
        border="1px solid var(--sidebar-bg-primary)"
      />
      <Link to={"/table-view"}>
        <Button btnText={"Save"} width={100} height={38} />
      </Link>
    </div>
  );
};

export default TableFooter;
