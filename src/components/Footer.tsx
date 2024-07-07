const Footer = () => {
  const footerLinks = [
    { name: "Features", url: "/" },
    { name: "Explore", url: "/" },
    { name: "Shop", url: "/" },
    { name: "Hire Artist   ", url: "/" },
    { name: "Find Gig", url: "/" },
    { name: "Navigate", url: "/" },
    { name: "Cart", url: "/" },
    { name: "Notification", url: "/" },
    { name: "Orders", url: "/" },
    { name: "Messages", url: "/" },
    { name: "Profile", url: "/" },
    { name: "Awards", url: "/" },
    { name: "Moodboard", url: "/" },
    // { name: "Contact", url: "/" },
    // { name: "(239) 555-0108", url: "/" },
    // { name: "1901 Thornridge Cir. Shiloh, Hawaii 81063", url: "/" },
    // { name: "artsony.ng@gmail.com", url: "/" },
  ];
  return (
    <div className="w-full h-auto py-10  flex flex-col items-center bg-footer-background bg-cover">
      {/* main footer data */}
      <div className="w-full h-auto flex flex-row items-center ">
        <div className="w-1/3 p-10 flex flex-col item-center">
          <img
            src="/images/footer logo.svg"
            alt=""
            className="mx-auto   mt-10 w-[226px] h-auto object-cover"
          />
          <p className="py-10 text-[20px] font-Poppins text-white">
            Get your art on. Subscribe to our newsletter
          </p>
          {/* email sub */}
          <div className=" w-full h-[50px] flex flex-row border border-[#F25B38B2] rounded item-center">
            <input
              type="text"
              placeholder="Email Address"
              className="w-2/3 h-full mx-2 text-xs font-Poppins text-white bg-transparent outline-none  "
            />
            <button className="  w-1/3 h-full text-[12px] font-Poppins text-white   bg-[#F25B38] hover:bg-[#d83f1d]">
              Subscribe
            </button>
          </div>
        </div>

        {/* footer links and routes */}

        <div className=" m-auto mx-10 px-16 w-2/3  flex flex-row  item-center">
          <div className="mx-auto w-auto grid grid-cols-3 gap-x-20 justify-center item-center">
            {footerLinks.map((d, i) => (
              <p className="text-[14px] py-4 font-Poppins text-white" key={i}>
                {d.name}
              </p>
            ))}
          </div>
          <div className=" w-[200px]   grid grid-cols-1 gap-x-20 justify-center item-center">
            <p className="text-[14px] py-3 font-Poppins text-white">Contact</p>
            <p className="text-[14px] py-3 font-Poppins text-white">(239) 555-0108</p>
            <p className="text-[14px] py-3 font-Poppins text-white">
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </p>
            <p className="text-[14px] py-4 font-Poppins text-white">artsony.ng@gmail.com</p>
          </div>
        </div>
      </div>

      {/* footnote and icons */}
      <div className=" w-full h-auto flex flex-col  ">
        <div className="px-12 w-full h-auto flex">
          <div className="w-auto h-auto flex flex-row items-center">
            <img
              src="/images/Ellipse 10.svg"
              alt="user"
              className=" mx-3 w-[48px] h-[48px] rounded-full object-cover"
            />
            <p className="text-[14px] font-Poppins text-white">Christine Boluwatife</p>
          </div>
          <div className="ml-auto w-auto h-auto flex flex-row justify-end items-center">
            <img
              src="/images/instagram-w.svg"
              alt="icon"
              className=" mx-3 w-[40px] h-[40px]   object-cover"
            />
            <img
              src="/images/Fb-w.svg"
              alt="icon"
              className=" mx-3 w-[30px] h-[30px]   object-cover"
            />
            <img
              src="/images/linkdin-w.svg"
              alt="icon"
              className=" mx-3 w-[30px] h-[30px]   object-cover"
            />
            <img
              src="/images/twitter-w.svg"
              alt="icon"
              className=" mx-3 w-[30px] h-[30px]   object-cover"
            />
          </div>
        </div>

        <hr className="my-8 border-1 border-[#F25B38]" />
        <p className="px-12 text-[16px] font-Poppins text-white">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
