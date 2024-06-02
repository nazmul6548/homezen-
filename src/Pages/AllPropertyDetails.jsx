import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../hook/useAxiosCommon";

const AllPropertyDetails = () => {
    const {id} =useParams()
  const axiosCommon = useAxiosCommon();
  const { data: house = {}, isLoading,error } = useQuery({
    queryKey: ["house",id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/house/${id}`);
      return data;
    },
  });
  console.log(house);
  if (isLoading) {
    return<p>loading....</p>;
       
    }
    if (error) {
        return <p>Error loading data: {error.message}</p>;  // Display an error message
      }
    // console.log(house);
    
  return <div>
    <h1 className="pt-12">{house.length}</h1>
    <h2>this is details page{house.image}</h2>
    <h2>this is details page{house.property_title}</h2>
  </div>;
};

export default AllPropertyDetails;
