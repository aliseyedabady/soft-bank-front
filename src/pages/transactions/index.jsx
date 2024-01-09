import { useState } from "react";
import "./style.scss";

const Transactions = () => {
  const generateFakeData = () => {
    return Array.from({ length: 500 }, (_, index) => ({
      id: index + 1,
      name: `Row ${index + 1}`,
    }));
  };

  const [data, setData] = useState(generateFakeData());

  return (
    <div className="print-container">
      <div className="fake-header">
        <p>Fake Content</p>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="border">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border">
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
