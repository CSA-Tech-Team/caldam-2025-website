import React from 'react';

const RegistrationTable = () => {
  return (
    <div className="p-4 pb-6 ">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead
          className='text-xl font-medium lg:text-2xl'
          >
            <tr>
              <th className=" text-3xl p-2 translate-y-[50%]  ">CALDAM 2025</th>
              <th className="border border-gray-300 p-2" colSpan="2">Developed countries</th>
              <th className="border border-gray-300 p-2" colSpan="2">Developing countries</th>
            </tr>
            <tr>
              <th className=" p-2"></th>
              <th className="border border-gray-300 p-2">Student</th>
              <th className="border border-gray-300 p-2">Faculty</th>
              <th className="border border-gray-300 p-2">Student</th>
              <th className="border border-gray-300 p-2">Faculty</th>
            </tr>
          </thead>
          <tbody>
            <tr
            className=''
            >
              <td className="border border-gray-300 p-2 text-3xl font-semibold">Early</td>
              <td className="border border-gray-300 p-2 w-fit bg-gradient-to-r from-orange to-[#585aac] bg-clip-text text-3xl font-semibold text-transparent lg:text-2xl xl:text-4xl">₹ 12,000</td>
              <td className="border border-gray-300 p-2 w-fit bg-gradient-to-r from-orange to-[#585aac] bg-clip-text text-3xl font-semibold text-transparent lg:text-2xl xl:text-4xl">₹ 24,000</td>
              <td className="border border-gray-300 p-2 w-fit bg-gradient-to-r from-orange to-[#585aac] bg-clip-text text-3xl font-semibold text-transparent lg:text-2xl xl:text-4xl">₹ 5,000</td>
              <td className="border border-gray-300 p-2 w-fit bg-gradient-to-r from-orange to-[#585aac] bg-clip-text text-3xl font-semibold text-transparent lg:text-2xl xl:text-4xl">₹ 8,000</td>
            </tr>
            <tr
            className=' text-center '
            >
              <td className="border border-gray-300 p-2 text-left text-3xl font-semibold">Late</td>
              <td className="border border-gray-300 p-2">_</td>
              <td className="border border-gray-300 p-2">_</td>
              <td className="border border-gray-300 p-2">_</td>
              <td className="border border-gray-300 p-2">_</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationTable;
