import React from "react";

const RegistrationTable = () => {
  return (
    <div className="p-4 pb-6 ">
      <div className="overflow-x-auto max-lg:hidden">
        <table className="min-w-full border border-gray-300">
          <thead className="text-xl font-medium lg:text-2xl">
            <tr>
              <th className=" translate-y-[50%] p-2 text-2xl font-semibold lg:text-3xl xl:text-4xl">
                CALDAM 2025
              </th>
              <th
                className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl"
                colSpan="2"
              >
                Developed countries
              </th>
              <th
                className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl"
                colSpan="2"
              >
                Developing countries
              </th>
            </tr>
            <tr>
              <th className=" p-2"></th>
              <th className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Student
              </th>
              <th className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Faculty
              </th>
              <th className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Student
              </th>
              <th className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Early
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 12,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 24,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 5,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 8,000
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 p-2 text-lg font-semibold lg:text-xl xl:text-2xl">
                Late
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 14,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 26,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 7,000
              </td>
              <td className="w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 text-lg font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 10,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto lg:hidden">
        <table className="mb-4 min-w-full border border-gray-300">
          <thead className="text-xl font-medium">
            <tr>
              <th className=" translate-y-[50%] p-2 text-lg font-semibold lg:text-3xl xl:text-4xl">
                CALDAM 2025
              </th>
              <th
                className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl"
                colSpan="2"
              >
                Developed countries
              </th>
            </tr>
            <tr>
              <th className=" p-2"></th>
              <th className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Student
              </th>
              <th className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Early
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 12,000
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 24,000
              </td>
            </tr>
            <tr className="text-center">
              <td className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Late
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 14,000
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 26,000
              </td>
            </tr>
          </tbody>
        </table>
        <table className="min-w-full border border-gray-300">
          <thead className="text-xl font-medium lg:text-2xl">
            <tr>
              <th className=" translate-y-[50%] p-2 text-lg font-semibold lg:text-3xl xl:text-4xl">
                CALDAM 2025
              </th>
              <th
                className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl"
                colSpan="2"
              >
                Developing countries
              </th>
            </tr>
            <tr>
              <th className=" p-2"></th>
              <th className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Student
              </th>
              <th className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Early
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 5,000
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 8,000
              </td>
            </tr>
            <tr className="text-center">
              <td className="text-md border border-gray-300 p-2 font-semibold lg:text-xl xl:text-2xl">
                Late
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 7,000
              </td>
              <td className="text-md w-fit border border-gray-300 bg-gradient-to-r from-orange to-[#585aac] bg-clip-text p-2 font-semibold text-transparent lg:text-xl xl:text-2xl">
                ₹ 10,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationTable;
