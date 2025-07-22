import "./Table7Columns.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import star from "../../assets/icons/star.svg";

interface Table3ColumnsProps {
  headingCol1: string;
}
const Table7Columns = ({ headingCol1 }: Table3ColumnsProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <table className="table7Columns-table">
        <thead className="table7Columns-table-header">
          <tr>
            <th></th>
            <th className="table7Columns-table-header-name">{headingCol1}</th>
            <th className="table7Columns-table-header-name">Action</th>

            <th className="table7Columns-table-header-name">Row</th>
            <th className="table7Columns-table-header-name">Type</th>
            <th className="table7Columns-table-header-name">Collation</th>
            <th className="table7Columns-table-header-name">Size</th>
            <th className="table7Columns-table-header-name">Overhead</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table7Columns-table-row">
            <td>
              <Checkbox {...label} />
            </td>

            <td style={{ fontWeight: "600" }}>
              <Link to="/protocol-database">test_db</Link>
            </td>
            <td className="table7Columns-table-collations action">
              <img src={star} alt="star" />
              <p>Browser</p>
              <p>Structure</p>
              <p>Search</p>
              <p>Insert</p>
              <p>Empty</p>
              <p>Drop</p>
            </td>
            <td className="table7Columns-table-actions">0</td>
            <td className="table7Columns-table-actions">InnoDB</td>
            <td className="table7Columns-table-actions">utf8mb4_general_ci</td>
            <td className="table7Columns-table-actions">16.0 Kib</td>
            <td className="table7Columns-table-actions">0 B</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="table7Columns-total-database">Total: 5</div>
    </>
  );
};

export default Table7Columns;
