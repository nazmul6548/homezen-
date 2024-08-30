import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './alldetailsstyle.css'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import useAxiosCommon from "../hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const AlldetailsSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams();
    const axiosCommon = useAxiosCommon();

    const { data: house = {}, isLoading, error } = useQuery({
        queryKey: ["house", id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/house/${id}`);
            return data;
        },
    });

    if (isLoading) {
        return <p>Loading....</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    // Assuming house.images is an array of image URLs
    const images = house.images || [];

    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    
                    <SwiperSlide key={index}>
    <div className="h-[450px] w-full overflow-hidden">
        <img className="object-cover h-full w-full" src={image} alt={`House thumbnail ${index + 1}`} />
    </div>
</SwiperSlide>

                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    // <SwiperSlide key={index}>
                    //     <img className="h-[200px] w-[300px]" src={image} alt={`House thumbnail ${index + 1}`} />
                    // </SwiperSlide>
                    <SwiperSlide key={index}>
    <img  src={image} alt={`House thumbnail ${index + 1}`} />
</SwiperSlide>


                ))}
            </Swiper>
        </div>
    );
};

export default AlldetailsSlider;
