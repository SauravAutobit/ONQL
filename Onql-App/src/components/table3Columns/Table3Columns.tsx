import { Link } from "react-router-dom";
import "./Table3Columns.css";
import Checkbox from "@mui/material/Checkbox";

interface Table3ColumnsProps {
  headingCol1: string;
}
const Table3Columns = ({ headingCol1 }: Table3ColumnsProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <table className="table3Columns-table">
        <thead className="table3Columns-table-header">
          <tr>
            <th></th>
            <th className="table3Columns-table-header-name">{headingCol1}</th>
            <th className="table3Columns-table-header-name">Collation</th>
            <th className="table3Columns-table-header-name">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table3Columns-table-row">
            <td>
              <Checkbox {...label} disabled />
            </td>

            <td>
              <Link to="/protocol-database">Database 1</Link>
            </td>
            <td className="table3Columns-table-collations">
              utf8mb4_general_ci
            </td>
            <td className="table3Columns-table-actions">Check privileges</td>
          </tr>
          <tr>
            <td>
              <Checkbox {...label} disabled />
            </td>
            <td>
              <Link to="/protocol-table">Database 2</Link>
            </td>
            <td className="table3Columns-table-collations">
              utf8mb4_general_ci
            </td>
            <td className="table3Columns-table-actions">Check privileges</td>
          </tr>
          <tr className="table3Columns-table-row">
            <td>
              <Checkbox {...label} disabled />
            </td>
            <td>Database 1</td>
            <td className="table3Columns-table-collations">
              utf8mb4_general_ci
            </td>
            <td className="table3Columns-table-actions">Check privileges</td>
          </tr>
          <tr>
            <td>
              <Checkbox {...label} disabled />
            </td>
            <td>Database 1</td>
            <td className="table3Columns-table-collations">
              utf8mb4_general_ci
            </td>
            <td className="table3Columns-table-actions">Check privileges</td>
          </tr>
          <tr className="table3Columns-table-row">
            <td>
              <Checkbox {...label} />
            </td>
            <td>Database 1</td>
            <td className="table3Columns-table-collations">
              utf8mb4_general_ci
            </td>
            <td className="table3Columns-table-actions">Check privileges</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="table3Columns-total-database">Total: 5</div>
    </>
  );
};

export default Table3Columns;
