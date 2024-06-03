
const ManageUsers = () => {
    return (
        <div className="font-sans overflow-x-auto">
  <table className="min-w-full bg-white">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Name
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Email
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Role
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Fraud
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Actions
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Actions
        </th>
      </tr>
    </thead>

    <tbody className="whitespace-nowrap">
      <tr className="hover:bg-gray-50">
        <td className="p-4 text-[15px] text-gray-800">
          John Doe
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          john@example.com
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          Admin
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          agent
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          frud
        </td>
        <td className="p-4">
         
          <button className="mr-4" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000" />
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000" />
            </svg>
          </button>
        </td>
      </tr>

      
    </tbody>
  </table>
</div>
    );
};

export default ManageUsers;