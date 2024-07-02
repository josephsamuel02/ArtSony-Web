const About = () => {
  return (
    <div className="mt-12 flex items-center justify-around w-full">
      <div className="flex flex-col ">
        <div className="gap-2">
          <h1 className="text-[24px] text-xl font-normal">Bio</h1>
          <p className="w-[613px]   font-Poppins text-[17px]">
            Hi, I am Christine Boluwatife. I am a medical doctor with a passion for painting.
            My main specialty is abstract art and I am simply just a mother who loves to paint.
            If you want to know more about me you can check my web page and socials in the
            links below.
          </p>
        </div>

        <div className="flex flex-col gap-6 ">
          <h1 className="text-[24px] text-xl font-normal">Page</h1>

          <div className="flex flex-col mt-5">
            <div className="flex flex-col gap-4 text-[#F25B38]">
              <div className="w-[167px] flex gap-6">
                <div className="flex gap-3">
                  <p>35</p>
                  <p>Following</p>
                </div>

                <div className="flex gap-2">
                  <p>125k</p>
                  <p>Followers</p>
                </div>
              </div>

              <div className="w-[167px] flex gap-10">
                <div className="flex gap-3">
                  <p>160k</p>
                  <p>Likes</p>
                </div>

                <div className="flex gap-2">
                  <p>1.2M</p>
                  <p>Views</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <img className=" w-[598px] " src="public/images/Line 24.svg" alt="" />
              <h1 className="text-[#A19D9D] w-[234px] h-[24px]">Member since 2022</h1>
            </div>
          </div>
        </div>
      </div>

      <img className="" src="./images/Line 23.svg" alt="" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="w-[103px] h-[24px]">Socials</h1>
          <div className="flex gap-12">
            <img src="./images/instagram.svg" alt="instagram" className="hover:opacity-60" />
            <img src="public/images/behance.svg" alt="behance" className="hover:opacity-60" />
            <img
              src="public/images/facebook.svg"
              alt="facebook"
              className="hover:opacity-60"
            />
            <img
              src="public/images/linkedin.svg"
              alt="linkedin"
              className="hover:opacity-60"
            />
            <img src="public/images/twitter.svg" alt="twitter" className="hover:opacity-60" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="w-[143px] h-[23px]">Links</h1>
          <button className="text-[#F25B38] w-[384px] h-[48px] border border-[#F25B38] hover:bg-[#F25B38] hover:text-white">
            www.designhaven.com
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="w-[143px] h-[23px]">Art focus</h1>
          <div className="flex flex-row gap-3 text-[#8AC5C7]">
            <p className="w-[126px] h-[24px]">Abstract Art</p>
            <p className="w-[126px] h-[24px]">Oil Painting</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1>Location</h1>
          <div className="flex flex-row gap-6">
            <img className="w-[24px] h-[24px]" src="public/images/map-marker.svg" alt="" />
            <p className="w-[164px] h-[24px] text-[#686B6F]">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
