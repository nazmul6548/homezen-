import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
import AllPropertycard from "../card/AllPropertycard";


const AllProperties = () => {
const axiosSecure = useAxiosSecure()
    const {data:houses=[],isLoading}=useQuery({
        queryKey:["house"],
        queryFn:async()=>{
            const {data} = await axiosSecure.get("/house")
            return data;


        }
    })
    console.log(houses);
    if (isLoading){
        <p>loading....</p>
        return
    }
    return (
        <div className="min-h-screen pt-16">
            
            {
                houses && houses.length>0 ? (
                    <div>
                        <div className="bg-[#e7dfd9] px-4 py-10 font-[sans-serif]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333]">LATEST BLOGS</h2>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-3">
       {
                            houses.map(house => (
                                <AllPropertycard key={house._id} house={house}></AllPropertycard>
                            ))
                        }
       </div>
      </div>
    </div>
                    </div>
                ) : (
                   <div className="text-center font-bold text-5xl">
                    <h1>data not avilable</h1>
                   </div> 
                )
            }
        </div>
    );
};

export default AllProperties;