import {  Modal } from "flowbite-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../hook/useAxiosCommon";
// import RviewModal from "../component/RviewModal";
import { useContext, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
// import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
// import useAxiosPublic from "../axios/useAxiosPublic";
import CommentSec from "../component/CommentSec";
import useAxiosSecure from "../hook/useAxiosSecure";

const AllPropertyDetails = () => {
  
  // review section
  const {user} =useContext(AuthContext)
  // 
  const axiosSecure =useAxiosSecure()
  const [loading,setloading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const {mutateAsync} = useMutation({
    mutationFn:async result=>{
        const {data} = await axiosSecure.post("/reviews",result)
        return data
    },
    onSuccess:async ()=>{
      try {
        await refetch();
        Swal.fire("Added Successfully!");
        setloading(false);
      } catch (error) {
        console.error("Error refetching data:", error);
        setloading(false);
      }
    }
})
  // 
  const handleReview =async e => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;
    const reviewerName=user?.displayName;
    const reviewerImage=user?.photoURL;
    const reviewerEmail=user?.email;
    const Property_title=house?.property_title;
    const agentName = house?.agent?.name;
    const reviewTime=new Date()
    // const result = {reviewTime,description,reviewerName,reviewerImage,reviewerEmail,Property_title}


    // console.log(result);

    try{
      
      const result = {reviewTime,agentName,description,reviewerName,reviewerImage,reviewerEmail,Property_title}
      // console.log(result);
      await mutateAsync(result)
      form.reset();
  }catch (error) {
      console.log(error);
      // Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: '<a href="#">Why do I have this issue?</a>'
      //   });
      setloading(false)
  }finally{
    setButtonDisabled(false);
  }
  }
  // 
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
// 
function onCloseModal() {
  setOpenModal(false);
  
  setEmail('');
}
// 

// 
// review sectio closed
    const {id} =useParams()
  const axiosCommon = useAxiosCommon();
  const { data: house = {}, isLoading,error,refetch } = useQuery({
    queryKey: ["house",id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/house/${id}`);
      return data;
    },
  });
  // console.log(house);
  if (isLoading) {
    return<p>loading....</p>;
       
    }
    if (error) {
        return <p>Error loading data: {error.message}</p>;  // Display an error message
      }
    // console.log(house);
    const addWishlist=async(e) => {
      // e.preventDefault();
      const productlist = e;
      const buyername=user.displayName;
      const buyeremail=user.email;
      const date=new Date()
     
    
      const res={productlist, buyername, buyeremail,date,}
      const menuRes = await axiosSecure.post('/wishlist',res);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: ' is added to the menu.',
                showConfirmButton: false,
                timer: 1500
              });
        }
    
      // console.log(res);
    }
  return <div className="flex justify-center min-h-screen pt-12">
   
   <div className="font-sans">
  <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="min-h-[500px] lg:col-span-3 bg-green-100 rounded-lg w-full lg:sticky top-0 text-center p-6">
        {/* <img src={house.image} 
        alt="Product" className="w-5/5 rounded object-cover mx-auto py-6" /> */}
 {house.images && house.images[0] && (
    <img src={house.images[4]}
    alt="Product"
    className="w-5/5 rounded object-cover mx-auto py-6 " />
  )}
        <hr className="border-white border my-6" />

        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
          <div className="w-36 h-36 max-lg:w-16 max-lg:h-16 bg-green-300 p-3 rounded-lg">
          {house.images && house.images[0] && (
    <img src={house.images[1]}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover" />
  )}
          </div>
          <div className="w-36 h-36 max-lg:w-16 max-lg:h-16 bg-green-300 p-3 rounded-lg">
          {house.images && house.images[0] && (
    <img src={house.images[2]}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover" />
  )}
          </div>
          <div className="w-36 h-36 max-lg:w-16 max-lg:h-16 bg-green-300 p-3 rounded-lg">
          {house.images && house.images[0] && (
    <img src={house.images[3]}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover" />
  )}
          </div>
          <div className="w-36 h-36 max-lg:w-16 max-lg:h-16 bg-green-300 p-3 rounded-lg">
          {house.images && house.images[0] && (
    <img src={house.images[0]}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover" />
  )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-gray-800">{house.property_title}</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <p className="text-gray-800 text-xl font-bold">${house.price_range.min}-{house.price_range.max}</p>
          
        </div>

        <div className="flex space-x-2 mt-4"></div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">About the Property</h3>
          <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
            <li>{house.description}</li>
          </ul>
        </div>

        <button
        onClick={()=>addWishlist(house)}
          type="button"
          className="w-full mt-8 px-6 py-3 bg-green-200 hover:bg-green-300 text-black text-sm font-semibold rounded-md"
        >
          Add to wishlist
        </button>
{/*  */}
<button className="w-full mt-8 px-4 py-2.5 bg-transparent border border-green-400 text-gray-800 font-semibold rounded-lg" onClick={() => setOpenModal(true)}>Add Review</button>
<Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h1>Hi!👋 You Can Provide Your Opinion!</h1>
            <form onSubmit={handleReview}>
            <textarea placeholder='Type Message'
            required
            type="text"
            name="description"
    className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded" rows="4"></textarea>


<div className="w-full mt-4">
              <input type="submit" disabled={buttonDisabled} value="Submit" className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-purple-700 to-purple-300" />
            </div>
            </form>
           
            
              
            
            
           
          </div>
        </Modal.Body>
      </Modal>
      <CommentSec house={house} refetch={refetch}></CommentSec>
      </div>
    </div>
  </div>
</div>
{/*  */}
{/*  */}

{/*  */}
{/*  */}

  </div>;

};

export default AllPropertyDetails;
