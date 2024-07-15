import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../axios/useAxiosPublic";
// import useAxiosSecure from "../hook/useAxiosSecure";
// import useAxiosPublic from "../axios/useAxiosPublic";
import useAxiosSecure from "../hook/useAxiosSecure";


const CommentSec = ({house,refetch}) => {
    const {property_title} =house
    const axiosSecure = useAxiosSecure()
    const {data:reviews=[],isLoading}=useQuery({
        queryKey:["reviews"],
        queryFn:async()=>{
            const response = await axiosSecure.get("/reviews");
            console.log(response);
            if (response.headers['content-type'].includes('text/html')) {
                throw new Error("Received HTML instead of JSON");
            }
            return response.data;
        }
    })
    const filteredReviews = reviews.filter(review => review.Property_title === property_title);
    // console.log(filteredReviews);
    // console.log(reviews);
    if (isLoading){
        return<p>loading....</p>
    }
    const getTime = (datetime) => {
        const date = new Date(datetime);
        const formattedDate = date.toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} || ${formattedTime}`
      };
    
    return (
        <>
        
            {
                filteredReviews.map(rev => (
            //         
            <div key={rev._id} className="mt-8">
          <div className="flex items-start mt-8">
            <img
              src={rev.reviewerImage}
              className="w-12 h-8 rounded-[100%] border-2  border-white"
            />
            <div className="ml-3">
              <h4 className="text-sm  font-bold">{rev.reviewerName}</h4>
              <div className="mt-1">
                <p className="text-xs  font-semibold">{getTime(rev.reviewTime)}</p>
              </div>
              <p className="text-xs mt-4">
              {rev.description}
              </p>
            </div>
          </div>
          {/* button cilo */}
        </div>
                ))
            }
           
  


    
        </>
    );
};

export default CommentSec;