import React from 'react';

const PaymentDetailsTable = () => {
  return (
    <div className=" text-white border-white mt-10 ">
      <table className="min-w-full table-auto border-collapse border ">
        <thead>
          <tr className="">
            <th className="px-4 py-2 border font-bold  text-left text-3xl">Details</th>
            <th className="px-4 py-2 border font-bold  text-left text-3xl">Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border ">Bank Account Number</td>
            <td className="px-4 py-2 border ">1481267367</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border ">Beneficiary Name</td>
            <td className="px-4 py-2 border ">
              PSG Center for Nonformal and Continuing Education
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border ">Address</td>
            <td className="px-4 py-2 border ">
              Peelamedu, Coimbatore - 641004
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border ">Bank Name</td>
            <td className="px-4 py-2 border ">Central Bank of India</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border ">IFSC Code</td>
            <td className="px-4 py-2 border ">CBIN0280913</td>  
          </tr>
          <tr>
            <td className="px-4 py-2 border ">SWIFT Code</td>
            <td className="px-4 py-2 border ">CBININBBCOB</td>
            {/* {"old CBININBBOSB"}
            {" updated swift code"} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetailsTable;
