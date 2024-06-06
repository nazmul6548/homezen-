import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../component/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const {
    data: wishlist = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const { data } = await axiosSecure.get(`/wishlist/${user?.email}`);
      return data;
    },
  });
  console.log(wishlist);
  if (isLoading) {
    return <p>loading....</p>;
  }

  if (error) {
    return <p>Error loading wishlist: {error.message}</p>;
  }
  const handleDelete = (data) => {
    // console.log(data);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if(result.isConfirmed){
            axiosSecure.delete(`/wishlist/${data}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            }).catch(error => {
                console.error("Error deleting user:", error);
                Swal.fire({
                    title: "Error!",
                    text: "There was a problem deleting the user.",
                    icon: "error"
                });
            });
        }
    })

};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-green-100 p-4">
      {
        wishlist.map(wish=>(
            <div key={wish._id} className="bg-white grid sm:grid-cols-2 items-center shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <img
          src={wish?.productlist?.image}
          className="w-full h-full object-cover"
        />
        <div className="px-4 py-6">
          <h3 className="text-xl font-semibold">{wish?.productlist?.property_title}</h3>
          <p className="mt-2 text-sm text-gray-400">
            {wish?.productlist?.description}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {wish?.productlist?.location}
          </p>
          <div className="flex flex-wrap items-center cursor-pointer border rounded-lg w-full px-4 py-2 mt-6">
            <img
              src={wish?.productlist?.agent?.image}
              className="w-9 h-9 rounded-full"
            />
            <div className="ml-4 flex-1">
              <p className="text-sm text-black font-semibold"> {wish?.productlist?.agent?.name} </p>
              <p className="text-xs text-gray-400">agent</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-gray-400"
              viewBox="0 0 32 32"
            >
              <path
                d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                data-original="#000000"
              />
            </svg>
          </div>
          <div className="flex justify-between mt-3">
         <Link to="/dashboard/offerd"> <button className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-400 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300">Make Offer</button></Link>
          <button onClick={()=>handleDelete(wish._id)} className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-400 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300">Remove</button>
          </div>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default MyWishList;
