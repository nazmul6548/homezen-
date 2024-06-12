import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Button } from "flowbite-react";
import { useState } from "react";

const ManagePropertys = () => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const { data: houses = [], isLoading, refetch } = useQuery({
    queryKey: ["house"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/housess");
      return data;
    },
  });
console.log(houses);
  if (isLoading) {
    return <p>Loading...</p>;
  }


  const toggleModal = (house) => {
    setSelectedHouse(house); 
    setIsModalOpen(!isModalOpen); 
  };

  
  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    const value = e.target.status.value;
    console.log("Selected value:", value, "for house ID:", selectedHouse._id);
  
    try {
      await axiosSecure.patch(`/houses/admin/${selectedHouse._id}`, { status: value });
      refetch();
      setIsModalOpen(false); // Close modal after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="font-[sans-serif] overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">
              Property Title
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Property Location
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Agent Name
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Agent Email
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Price Range
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Status
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {houses.map((house) => (
            <tr key={house._id} className="even:bg-green-100">
              <td className="p-4 text-sm text-black">
                {house?.property_title}
              </td>
              <td className="p-4 text-sm text-black">
                {house?.location}
              </td>
              <td className="p-4 text-sm text-black">
                {house?.agent?.name}
              </td>
              <td className="p-4 text-sm text-black">
                {house?.agent?.email}
              </td>
              <td className="p-4 text-sm text-black">
                ${`${house?.price_range?.max}-${house?.price_range?.min}`}
              </td>
              <td className="p-4 text-sm text-black">
                {house?.status}
              </td>
              <td className="p-4 text-sm text-black">
                <button
                  onClick={() => toggleModal(house)} // Toggle the modal with the selected house details
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  {house?.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedHouse && (
        <div
          id="static-modal"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Update Status
                </h3>
                <button
                  type="button"
                  onClick={() => toggleModal(null)} // Close the modal
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form onSubmit={handleStatusUpdate} className="p-4 space-y-4">
                <select
                  name="status"
                  defaultValue={selectedHouse?.status}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled>{selectedHouse?.status}</option>
                  <option value="verified">Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
                <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <Button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </Button>
                  <Button
                    onClick={() => setIsModalOpen(false)} // Close the modal
                    className="ml-3 text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Decline
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePropertys;