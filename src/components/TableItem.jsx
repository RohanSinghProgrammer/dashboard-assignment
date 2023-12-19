import React from "react";

const TableItem = ({ index }) => {
  return (
    <tr key={index} className="odd:bg-gray-300 even:bg-gray-100 border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {index + 1}.
      </th>
      <td className="px-6 py-2">13052021 / 0800</td>
      <td className="px-6 py-2">XL00001</td>
      <td className="px-6 py-2">OT</td>
      <td className="px-6 py-2">Create Team</td>
      <td className="px-6 py-2">13052021 / 0815</td>
    </tr>
  );
};

export default TableItem;
