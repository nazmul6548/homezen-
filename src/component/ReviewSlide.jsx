import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./reviewslide.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import useAxiosCommon from "../hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const ReviewSlide = () => {
  const [expandedReviewId, setExpandedReviewId] = useState(null);
  const maxWords = 30;
  const axiosCommon = useAxiosCommon();

  const toggleExpansion = (id) => {
    setExpandedReviewId(expandedReviewId === id ? null : id);
  };

  const getTruncatedDescription = (description) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  const {
    data: reviews = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/reviews");
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error loading reviews: {error.message}</p>;
  }

  return (
    <div className="mt-5 md:mt-10 ml-10 mr-10">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-gray-200 h-[400px] md:h-auto flex flex-col justify-center items-center rounded-tl-full rounded-tr-full">
              <div className="h-[80px] w-[80px] flex mt-4">
                <img
                  src={review?.reviewerImage}
                  className="rounded-full h-full w-full object-cover"
                  alt={review.reviewerName}
                />
              </div>

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold text-center">
                  {review.reviewerName}
                </h4>
                <span className="text-gray-600 text-sm mt-1 text-center block">
                  {review?.Property_title}
                </span>

                <div>
                  <p className="mt-4 text-gray-600 text-xs text-center">
                    {expandedReviewId === review._id
                      ? review?.description
                      : getTruncatedDescription(review?.description)}
                  </p>
                  {review?.description.split(" ").length > maxWords && (
                    <p
                      className="text-blue-500 text-xs cursor-pointer text-center mt-1"
                      onClick={() => toggleExpansion(review._id)}
                    >
                      {expandedReviewId === review._id
                        ? "See Less"
                        : "See More"}
                    </p>
                  )}
                </div>

                <div className="space-x-4 mt-4 flex justify-center">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      className="fill-gray-800"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      className="fill-gray-800"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      className="fill-gray-800"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlide;
