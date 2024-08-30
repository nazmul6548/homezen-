// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hook/useAxiosSecure";
// import { AuthContext } from "../../component/AuthProvider";
// import { useContext, useState } from "react";
// import Swal from "sweetalert2";

// const MyReviews = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxWords = 24;
//   const getTruncatedDescription = (description) => {
//     const words = description.split(' ');
//     if (words.length > maxWords) {
//       return {
//         truncated: words.slice(0, maxWords).join(' ') + '...',
//         full: description,
//       };
//     }
//     return { truncated: description, full: description };
//   };

//   const { truncated, full } = getTruncatedDescription(review.description);
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const {
//     data: review = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["myreviews", user?.email],
//     queryFn: async () => {
//       if (!user?.email) return [];
//       const { data } = await axiosSecure.get(`/reviews/${user.email}`);
//       return data;
//     },
//     enabled: !!user?.email,
//   });

//   if (isLoading) {
//     return <p>loading....</p>;
//   }

//   const handleDelte = (data) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure
//           .delete(`/review/${data}`)
//           .then((res) => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your review has been deleted.",
//                 icon: "success",
//               });
//             }
//           })
//           .catch((error) => {
//             console.error("Error deleting review:", error);
//             Swal.fire({
//               title: "Error!",
//               text: "There was a problem deleting the review.",
//               icon: "error",
//             });
//           });
//       }
//     });
//   };
  

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

 
//   return (
//     <div className="bg-green-100 pt-6 min-h-screen p-6">
//       <h1 className="text-center font-bold text-4xl">My All Reviews</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {review.length > 0 ? (
//           review.map((review) => (
//             <div
//               key={review._id}
//               className="bg-white  shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
//             >
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold">
//                   {review?.Property_title}
//                 </h3>
//                 <div>
//       <p className="text-sm text-gray-400 mt-2">
//         {isExpanded ? full : truncated}
//       </p>
//       {full.split(' ').length > maxWords && (
//         <span
//           onClick={toggleExpansion}
//           className="text-blue-500 cursor-pointer"
//         >
//           {isExpanded ? 'See Less' : 'See More'}
//         </span>
//       )}
//     </div>
//                 {/* <p className="text-sm text-gray-400 mt-2">{review.description}</p> */}
//                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
//                   {new Date(review.reviewTime).toLocaleString("en-US", {
//                     hour: "numeric",
//                     minute: "numeric",
//                     hour12: true,
//                     day: "numeric",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </p>
                
//                 <h4 className="text-base font-extrabold mt-4">
//                   {review.agentName}
//                 </h4>
//                 <button
//                   onClick={() => handleDelte(review._id)}
//                   type="button"
//                   className="mt-4 px-5 py-2.5 w-full rounded-lg text-sm tracking-wider text-white border-none outline-none bg-green-400 hover:bg-green-600 transition-all duration-300"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No reviews found for this user.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyReviews;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../component/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const MyReviews = () => {
  const [expandedReview, setExpandedReview] = useState(null); // Store the expanded review's ID
  const maxWords = 20;

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myreviews", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const { data } = await axiosSecure.get(`/reviews/${user.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const handleDelete = (reviewId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/review/${reviewId}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting review:", error);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting the review.",
              icon: "error",
            });
          });
      }
    });
  };

  const toggleExpansion = (reviewId) => {
    setExpandedReview((prev) => (prev === reviewId ? null : reviewId)); // Toggle expansion
  };

  const getTruncatedDescription = (description) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return {
        truncated: words.slice(0, maxWords).join(" ") + "...",
        full: description,
      };
    }
    return { truncated: description, full: description };
  };

  return (
    <div className="bg-green-100 pt-6 min-h-screen p-6">
      <h1 className="text-center font-bold text-4xl">My All Reviews</h1>
      <Fade cascade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {reviews.length > 0 ? (
          reviews.map((review) => {
            const { truncated, full } = getTruncatedDescription(review.description);
            const isExpanded = expandedReview === review._id;

            return (
              <div
                key={review._id}
                className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    {review?.Property_title}
                  </h3>

                  <div>
                    <p className="text-sm text-gray-400 mt-2">
                      {isExpanded ? full : truncated}
                    </p>
                    {full.split(" ").length > maxWords && (
                      <span
                        onClick={() => toggleExpansion(review._id)}
                        className="text-blue-500 cursor-pointer"
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {new Date(review.reviewTime).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <h4 className="text-base font-extrabold mt-4">
                    {review.agentName}
                  </h4>

                  <button
                    onClick={() => handleDelete(review._id)}
                    type="button"
                    className="mt-4 px-5 py-2.5 w-full rounded-lg text-sm tracking-wider text-white border-none outline-none bg-green-400 hover:bg-green-600 transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No reviews found for this user.</p>
        )}
      </div>
      </Fade>
    </div>
  );
};

export default MyReviews;
