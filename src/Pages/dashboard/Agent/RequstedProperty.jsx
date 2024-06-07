

const RequstedProperty = () => {
    return (
        <div>
            <div className="font-sans bg-green-100 overflow-x-auto">
  <table className="min-w-full  divide-y divide-green-100">
    <thead className="bg-green-100 whitespace-nowrap">
      <tr>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        property title
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Property location
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        buyer email
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        buyer name
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        offered price
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Action
        </th>
        
      </tr>
    </thead>

    <tbody className="bg-white divide-y divide-gray-900 whitespace-nowrap">
      <tr>
        <td className="px-4 py-4 text-sm text-gray-800">
          John Doe
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          john@example.com
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          Admin
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          2022-05-15
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          2022-05-15
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          <button className="text-blue-600 mr-4">Accept</button>
          <button className="text-red-600">Reject</button>
        </td>
      </tr>

     

     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RequstedProperty;