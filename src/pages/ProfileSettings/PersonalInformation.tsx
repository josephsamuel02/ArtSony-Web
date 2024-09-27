const PersonalInformation = () => {
  return (
    <div className="w-full h-full p-5 rounded-md">
      <h2 className="text-xl p-3 py-5 border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Personal Information
      </h2>

      <div className="m-auto w-full h-auto mt-8 flex flex-col items-center justify-center ">
        <input
          type="text"
          name="Username"
          placeholder="Username"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="text"
          name="First name"
          placeholder="First name"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="text"
          name="Last name"
          placeholder="Last name"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="date"
          name="Date"
          placeholder="Date"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />

        <input
          type="button"
          name="Save"
          value="Save Changes"
          className="w-1/6 py-2 my-3 ml-auto mr-[60px] px-4 text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
