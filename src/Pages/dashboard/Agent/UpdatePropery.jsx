


const UpdatePropery = () => {
    




    









    return (
        <div>
            <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
  <h1 className="text-3xl text-[#333] font-extrabold text-center">Update Your Information</h1>
  <form className="mt-8 space-y-6">
    <div>
      <label className="text-sm font-semibold block mb-2">Property Title</label>
      <input
        type="text"
        placeholder="Property title"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Property Location</label>
      <input
        type="text"
        placeholder="Property location"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Agent Name</label>
      <input
        type="text"
        placeholder="Agent Name"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Agent Email</label>
      <input
        type="email"
        placeholder="Agent Email"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    <div>
      <label className="text-sm font-semibold block mb-2">Price Range</label>
      <input
        type="text"
        placeholder="Price Range"
        className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
    </div>
    {/*  */}
    <input
          type="file"
          name="image"
          required
          className="w-full  text-gray-500 font-medium text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
    {/*  */}
    <button
      type="button"
      className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
    >
      Send
    </button>
  </form>
</div>
        </div>
    );
};

export default UpdatePropery;