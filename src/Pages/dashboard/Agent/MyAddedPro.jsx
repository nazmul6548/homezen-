import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../component/AuthProvider";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";


const MyAddedPro = () => {
const {user} = useContext(AuthContext)

console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: houses = [], isLoading,refetch } = useQuery({
      queryKey: ["myaddedhouse",user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/myaddedhouse/${user?.email}`);
        return data;
      },
    });
    console.log(houses);
    if (isLoading) {
      return <p>loading....</p>;
    }

// handle delete
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
            axiosSecure.delete(`/myaddedhouse/${data}`)
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
        <div>
           <div className="bg-green-100 font-[sans-serif] p-4">
  <div className="max-w-6xl max-md:max-w-lg mx-auto">
    <div>
      <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
     
     {
        houses.map(house => (
            <div key={house._id} className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img
              src={house.image}
              alt="Blog Post 1"
              className="lg:w-2/5 min-h-[250px] h-full object-cover"
            />
            <div className="p-6 lg:w-3/5">
              <h3 className="text-xl font-bold text-[#333]">{house.title}</h3>
              <span className="text-sm block text-gray-400 mt-2">{house.location}</span>
              <span className="text-sm block text-gray-400 mt-2">Price :${house.price_range}</span>
              <p className="text-sm mt-4">
                {house.description}
              </p>
             <div className="flex mt-4 ">
             <Button className="bg-green-400 text-black w-full mr-4">Update</Button>
              <Button onClick={()=>handleDelete(house._id)} className="bg-green-400 text-black w-full ">Delete</Button>
             </div>
            </div>
          </div>
        ))
     }
      
     
    </div>
  </div>
</div>
        </div>
    );
};

export default MyAddedPro;