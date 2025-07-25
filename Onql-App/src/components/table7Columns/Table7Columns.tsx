import "./Table7Columns.css";
import { Link, useLocation } from "react-router-dom";
import star from "../../assets/icons/star.svg";
import CheckBox from "../checkBox/CheckBox";
import tableArrow from "../../assets/icons/tableArrow.svg";
import Button from "../button/Button";

interface Table7ColumnsProps {
  headingCol1: string;
}

const Table7Columns = ({ headingCol1 }: Table7ColumnsProps) => {
  const { pathname } = useLocation();

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
          <tr>
            <td style={{ padding: "10px 16px" }}>
              <CheckBox />
            </td>
            <td className="bold-link">
              <Link to="/protocol-column">test_db</Link>
            </td>
            <td className="table7Columns-table-actions action">
              <img src={star} alt="star" className="star-icon" />
              <span>Browser</span>
              <span>Structure</span>
              <span>Search</span>
              <span>Insert</span>
              <span>Empty</span>
              <span>Drop</span>
            </td>
            <td className="table7Columns-table-actions">0</td>
            <td className="table7Columns-table-actions">InnoDB</td>
            <td className="table7Columns-table-actions">utf8mb4_general_ci</td>
            <td className="table7Columns-table-actions">16.0 Kib</td>
            <td className="table7Columns-table-actions">0 B</td>
          </tr>

          <tr>
            <td style={{ padding: "10px 16px" }}></td>
            <td className="bold-link">
              <Link to="/protocol-database">1 table</Link>
            </td>
            <td
              className="table7Columns-table-actions action"
              style={{ fontWeight: "600" }}
            >
              Sum
            </td>
            <td className="table7Columns-table-actions bold-data">0</td>
            <td className="table7Columns-table-actions bold-data">InnoDB</td>
            <td className="table7Columns-table-actions bold-data">
              utf8mb4_general_ci
            </td>
            <td className="table7Columns-table-actions bold-data">16.0 Kib</td>
            <td className="table7Columns-table-actions bold-data">0 B</td>
          </tr>

          <tr>
            <td style={{ padding: "10px 0 10px 16px" }}>
              <img src={tableArrow} alt="expand" className="check-all-arrow" />
            </td>
            <td className="bold-link">
              <Link to="/protocol-database">Check all</Link>
            </td>
            {pathname === "/database-view" && (
              <td>
                <Button
                  btnText={"Export Table"}
                  width={113}
                  height={30}
                  padding={"6px 20px"}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table7Columns;
