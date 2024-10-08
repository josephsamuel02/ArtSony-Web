const AccountInformation = () => {
  return (
    <div className="w-full h-full p-5 rounded-md">
      <h2 className="text-xl p-3 py-5 border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Account Information
      </h2>

      <div className="m-auto w-full h-auto mt-8 flex flex-col justify-center ">
        <h2 className="text-md py-2   text-customOrange font-Raleway">Email *</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-5/6 py-2 mb-4 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <h2 className="text-md py-2   text-customOrange font-Raleway">Artsoney Link *</h2>
        <input
          type="text"
          name="Artsoney Link "
          placeholder="Artsoney Link "
          className="w-5/6 py-2 mb-4 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />

        <input
          type="button"
          name="Save"
          value="Save Changes"
          className="  py-2 my-3 ml-auto mr-[60px] px-4 text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AccountInformation;
