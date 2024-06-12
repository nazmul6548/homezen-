import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../component/AuthProvider";


const RequstedProperty = () => {
  const {user} =useContext(AuthContext)
  console.log(user.email);
const axiosSecure = useAxiosSecure()

// const handlePropertyAccept =(email,name,status)=>{
// console.log(email,name,status);
// axiosSecure.patch(`offerAccepted/${email}`,{status})
// .then((data)=>{
// console.log(data.data);
// if (data.data.modifidcount) {
  // refetch()

// }
// })
// }



    const { data: offerd = [], isLoading,refetch } = useQuery({
      queryKey: ["request","offerd",user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/offerdss/${user?.email}`);
        return data;
      },
    });
    console.log(offerd);
    if (isLoading) {
      return <p>loading....</p>;
    }


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

    <tbody className="bg-white divide-y divide-green-100 whitespace-nowrap">
      {
        offerd.map(offer=>(
            <tr key={offer._id}>
        <td className="px-4 py-4 text-sm text-gray-800">
        {offer?.offerProperty?.productlist?.property_title}
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          {offer?.offerProperty?.productlist?.location}
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          {offer?.offerProperty?.buyeremail}

        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
        {offer?.offerProperty?.buyername}
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          ${offer.offeerAmount}
        </td>
        <td className="px-4 py-4 text-sm text-gray-800">
          {/* <button className="text-blue-600 mr-4">Accept</button>
          <button className="text-red-600">Reject</button> */}
          {/* {
            offer?.offerProperty?.productlist?.status==='pending'?(
              <button onClick={handlePropertyAccept(offer._id)}></button>
            )
          } */}
        </td>
      </tr>
        ))
      }

     

     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RequstedProperty;
