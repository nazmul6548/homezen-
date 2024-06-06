import { useLoaderData } from "react-router-dom";

// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import useAxiosPublic from "../../axios/useAxiosPublic";
// import useAxiosSecure from "../../hook/useAxiosSecure";


const OfferdPage = () => {
     const item =useLoaderData()
     console.log(item);
// const axiosPublic=useAxiosPublic()
// const axiosSecure=useAxiosSecure()
//     const { id } = useParams();
  
//     const { data: item, isLoading, error } = useQuery({
//       queryKey: ["wishlist", id],
//       queryFn: async () => {
//         const response = await axiosSecure.get(`/wishlist/${id}`);
//         return response.data;
//       },
//     });
//   console.log(item);
//     if (isLoading) {
//       return <p>Loading....</p>;
//     }
  
//     if (error) {
//       return <p>Error loading data: {error.message}</p>;
//     }

    return (
        <div>
            <div className="font-[sans-serif] max-w-7xl mx-auto relative bg-green-100 rounded-xl overflow-hidden">
  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-green-400"></div>
  <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-green-400"></div>
  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-green-400"></div>
  <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-green-400"></div>
  <div className="grid md:grid-cols-2">
    <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-green-400 font-bold">Contact Us</h2>
      <img src="https://readymadeui.com/contact.webp" className="mt-4 shrink-0 w-full" />
    </div>
    <form className="bg-green-100 p-6 xl:p-10">
      <div className="max-w-sm mx-auto space-y-4">
      <div>
        <h1>Property Title</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
       <div>
        <h1>Property Location</h1>
        <input
          type="email"
          defaultValue={item?.productlist?.location}
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Agent Name</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
       <div>
        <h1>Offerd Amount</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Buyer Email</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Buyer Name</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        <div>
        <h1>Buying Date</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 rounded py-3 px-4 text-sm outline-none"
        />
        </div>
        
        {/* <input type="submit" value="OFFER" /> */}
         <button type="button"
          className="text-white w-full relative bg-green-600 hover:bg-blue-600 font-semibold rounded text-sm px-6 py-3"
        
         
          >OFFER</button>
        
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default OfferdPage;