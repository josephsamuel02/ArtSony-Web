const Customization = () => {
  return (
    <div className="w-full h-full   rounded-md">
      <h2 className="text-xl p-3   border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Customization
      </h2>

      <div className="m-auto w-full h-auto flex flex-col  justify-center   ">
        <h2 className="text-sm px-3  py-2  text-customOrange font-Raleway">Profile Photo</h2>
        <img
          src="/images/profilimage.jpeg"
          alt="profile image"
          className=" mb-2 mx-auto w-[90px] h-[90px] rounded-full object-cover"
        />
        <div className="mx-auto w-[300px] h-auto flex flex-row items-center ">
          <input
            type="button"
            name="Save"
            value="Change"
            className="  py-1 my-3  mx-auto px-6 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
          />
          <input
            type="button"
            name="Save"
            value=" Delete"
            className="  py-1 my-3  mx-auto px-6 text-sm text-customOrange font-Poppins bg-white border border-[#f76c534b] hover:bg-[#f76c534b]  rounded-md cursor-pointer"
          />
        </div>
        <img
          src="/images/ideogram.jpeg"
          alt="profile image"
          className=" mb-2 mx-auto w-11/12 h-[180px] rounded  object-cover"
        />
        <div className="mx-auto w-[300px] h-auto flex flex-row items-center ">
          <input
            type="button"
            name="Save"
            value="Change"
            className="  py-1 my-3  mx-auto px-6 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
          />
          <input
            type="button"
            name="Save"
            value=" Delete"
            className="  py-1 my-3  mx-auto px-6 text-sm text-customOrange font-Poppins bg-white border border-[#f76c534b] hover:bg-[#f76c534b]  rounded-md cursor-pointer"
          />
        </div>
      </div>
      <input
        type="button"
        name="Save"
        value="Save Changes"
        className=" flex  py-2 my-3  mr-10 ml-auto px-6 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
      />
    </div>
  );
};

export default Customization;
