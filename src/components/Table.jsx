import React from "react";

const Table = ({ headers, rows }) => (
  <table className="w-full border-black border shadow-lg rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-100">
        {headers.map((header, index) => (
          <th key={index} className="text-left px-4 py-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex} className="border-t">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="px-4 py-2">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
