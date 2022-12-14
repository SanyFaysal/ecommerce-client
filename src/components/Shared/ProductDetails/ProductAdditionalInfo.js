import React from 'react';

const ProductAdditionalInfo = () => {
  return (
    <div className="overflow-x-auto my-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td></td>
          </tr>

          <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td></td>
          </tr>

          <tr>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdditionalInfo;
