import React from "react";
import "./DynamicTable.css";

interface DataObject {
  [key: string]: any;
}

interface DynamicTableProps {
  data: DataObject[];
}

// Utility function to get unique keys from an array of objects
const getUniqueKeys = (data: DataObject[]): string[] => {
  const keys = new Set<string>();
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      keys.add(key);
    });
  });
  return Array.from(keys);
};

const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="no-data">No data available</p>;

  const keys = getUniqueKeys(data);

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td key={key}>
                  {Array.isArray(item[key]) ? item[key].join(", ") : item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
