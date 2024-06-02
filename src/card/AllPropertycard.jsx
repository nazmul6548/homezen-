import { Link } from "react-router-dom";


const AllPropertycard = ({house}) => {
    const {_id,image,property_title} = house
    return (
       
         <div>
           <div className=" gap-2 mt-12 max-md:max-w-lg mx-auto">
          <div className="rounded  overflow-hidden p-6 hover:bg-white transition-all duration-300">
            <img src={image} alt="Blog Post 1" className="w-full h-64 object-cover rounded " />
            <div className="text-center">
              <span className="text-sm block text-[#333] mb-2 mt-4">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-[#333] mb-4">{property_title}</h3>
              <p className="text-[#333] text-sm"></p>
              {/* <Link  type="button" className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-[#b69b88] hover:bg-[#af876a] mt-6">Read more</Link> */}
              <Link to={`/house/${_id}`}>
          <button  type="button" className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-[#b69b88] hover:bg-[#af876a] mt-6">
            View Details
          </button>
        </Link>
            </div>
          </div>
         
          
        </div>
        </div>
       
    );
};

export default AllPropertycard;