import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import './slide.css'
// import 'animate.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from "swiper/react";


const Slide = () => {
    
    return (
        <div className="">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000 }}
          effect="fade"
         
        >
          <SwiperSlide>
            <div className="slide slide1 flex flex-col fixed min-h-full">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto font-lato text-center text-white animate__animated animate__fadeInDownBig whitespace-nowrap">
                Vegetable Fruits
                </h1>
                <p className="w-3/4 m-auto text-white text-center mt-5 font-lato">An on-site job requires employees to work physically at a designated location, typically within a company's office or workplace.</p>
              </div>
              <div className="mt-6">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="slide slide2 flex flex-col">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold w-3/4 font-lato m-auto text-center text-white animate__animated animate__fadeInTopLeft whitespace-nowrap">
                Vagitable Fruits
                </h1>
                <p className="w-3/4 m-auto text-white text-center mt-5 font-lato"> A remote job allows employees to work from any location outside of a traditional office setting, leveraging technology to communicate and collaborate with colleagues.</p>
              </div>
              <div className="mt-6">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="slide slide3 flex flex-col">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center font-lato text-white animate__animated animate__fadeInBottomRight whitespace-nowrap">
                Vagitable Fruits
                </h1>
                <p className="w-3/4 m-auto text-white text-center mt-5 font-lato"> A hybrid job combines elements of both on-site and remote work, allowing employees to split their time between working in a physical office and working remotely.</p>
              </div>
              <div className="mt-6">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="slide slide4 flex flex-col">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center font-lato text-white animate__animated animate__fadeInBottomRight whitespace-nowrap">
                Vagitable Fruits
                </h1>
                <p className="w-3/4 m-auto text-white text-center mt-5 font-lato">A part-time job involves working fewer hours than a full-time position, typically less than 40 hours per week. </p>
              </div>
              <div className="mt-6">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide5 flex flex-col">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center font-lato text-white animate__animated animate__fadeInBottomRight whitespace-nowrap">
                Vagitable Fruits
                </h1>
                <p className="w-3/4 m-auto text-white text-center mt-5 font-lato">A part-time job involves working fewer hours than a full-time position, typically less than 40 hours per week. </p>
              </div>
              <div className="mt-6">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  
    );
};

export default Slide;