// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import './onesectionslide.css';

// // import required modules
// import { EffectCards } from 'swiper/modules';

// const OneSectionSlide = () => {
//     return (
//         <div className=''>
//             <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper h-[500px]"
//       >
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" /></SwiperSlide>
//       </Swiper>
//         </div>
//     );
// };

// export default OneSectionSlide;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// // import './onesectionslide.css';
// import { EffectCards } from 'swiper/modules';

// const OneSectionSlide = () => {
//     return (
//         <div className=''>
//             <Swiper
//                 effect={'cards'}
//                 grabCursor={true}
//                 modules={[EffectCards]}
//                 className="mySwiper " // Adjust the height of the Swiper container if needed
//             >
//                 <SwiperSlide>
//                     <img 
//                         src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" 
//                         alt="" 
//                         className="h-[700px] w-[100px] object-cover" // Adjust height and width here
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img 
//                         src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" 
//                         alt="" 
//                         className="h-[700px] w-[400px] object-cover"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img 
//                         src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" 
//                         alt="" 
//                         className="h-[700px] w-[400px] object-cover"
//                     />
//                 </SwiperSlide>
//                 {/* Add more SwiperSlide components as needed */}
//             </Swiper>
//         </div>
//     );
// };

// export default OneSectionSlide;
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './onesectionslide.css';
// import { EffectCards } from 'swiper/modules';

// const OneSectionSlide = () => {
//   return (
//     <div className='w-full md:w-[90%]'>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         // className="mySwiper "
//       >
//         <SwiperSlide>
//           <div className="h-[100px] w-[100px] md:h-[300px]  md:w-[300px] ">
//             <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[100px] w-[100px] md:h-[300px] md:w-[300px] ">
//             <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="h-[100px] w-[100px] md:h-[300px] md:w-[300px] ">
//             <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
//           </div>
//         </SwiperSlide>
        
//         {/* Add more slides as needed */}
//       </Swiper>
//     </div>
//   );
// };

// export default OneSectionSlide;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const OneSectionSlide = () => {
  return (
    <div className='w-full md:w-[90%]'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
      >
        <SwiperSlide>
          <div className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] ">
            <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] ">
            <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] ">
            <img src="https://i.ibb.co/tbH9Tdc/pexels-introspectivedsgn-4157121.jpg" alt="" className="h-full w-full object-cover"/>
          </div>
        </SwiperSlide>
        
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default OneSectionSlide;
