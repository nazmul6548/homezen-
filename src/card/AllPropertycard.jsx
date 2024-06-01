

const AllPropertycard = ({house}) => {
    return (
        <div>
           <div className=" gap-2 mt-12 max-md:max-w-lg mx-auto">
          <div className="rounded overflow-hidden p-6 hover:bg-white transition-all duration-300">
            <img src={house.image} alt="Blog Post 1" className="w-full h-64 object-cover rounded" />
            <div className="text-center">
              <span className="text-sm block text-[#333] mb-2 mt-4">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-[#333] mb-4">Igniting Your Imagination</h3>
              <p className="text-[#333] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              <button type="button" className="px-6 py-3 text-white text-sm tracking-wider border-none outline-none bg-[#b69b88] hover:bg-[#af876a] mt-6">Read more</button>
            </div>
          </div>
         
          
        </div>
        </div>
    );
};

export default AllPropertycard;