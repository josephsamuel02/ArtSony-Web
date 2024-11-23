import { FaYoutube } from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface compData {
  User: any;
}
const About = ({ User }: compData) => {
  return (
    <div className="mt-12 flex items-center justify-around w-full">
      <div className="flex flex-col ">
        <div className="gap-2">
          <h1 className="text-[24px] text-xl font-normal">Bio</h1>
          {User.bio !== null ? (
            <p className="w-[613px] font-Poppins text-[17px]">{User.bio}</p>
          ) : (
            <p className="w-[613px] font-Poppins text-[17px]">Your bio will appear here</p>
          )}
        </div>

        {/* <div className="flex flex-col gap-6 ">
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
        </div> */}
      </div>

      <img className="" src="./images/Line 23.svg" alt="" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="w-[103px] h-[24px]">Socials</h1>

          <div className="flex flex-row items-center">
            <a
              href={User.socials?.instagram ? User.socials?.instagram : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/instagram.svg"
                alt="instagram"
                className="hover:opacity-70 w-[25px] h-[25px] object-cover items-center "
              />
            </a>

            <a
              href={User.socials?.behance ? User.socials?.behance : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/images/behance.svg"
                alt="behance"
                className="hover:opacity-70 w-[25px] h-[25px] object-cover items-center"
              />
            </a>

            <a
              href={User.socials?.facebook ? User.socials?.facebook : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/images/facebook.svg"
                alt="facebook"
                className="hover:opacity-70 w-[25px] h-[25px] object-cover items-center"
              />
            </a>

            <a
              href={User.socials?.x_social ? User.socials.x_social : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/images/twitter.svg"
                alt="twitter"
                className="hover:opacity-70 w-[25px] h-[25px] object-cover items-center"
              />
            </a>

            <a
              href={User.socials?.youtube ? User.socials.youtube : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube color="red" size={28} />
            </a>

            <a
              href={User.socials?.linkedin ? User.socials.linkedin : ""}
              className="mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/images/linkedin.svg"
                alt="linkedin"
                className="hover:opacity-70 w-[25px] h-[25px] object-cover items-center"
              />
            </a>
          </div>
        </div>

        {User.website.length > 0 && (
          <div className="flex flex-col gap-6">
            <h1 className="w-[143px] h-[23px]">Website</h1>
            <button className="text-[#F25B38] w-[384px] h-[48px] border border-[#F25B38] hover:bg-[#F25B38] hover:text-white">
              {User.website[0]}
            </button>
          </div>
        )}
        <h1 className="w-[143px] h-[23px]">Art focus</h1>
        <div className="flex flex-row  ">
          {User.art_focus && (
            <div className="flex flex-row flex-wrap  text-[#8AC5C7]">
              {User.art_focus &&
                User.art_focus.map((d: string, i: number) => (
                  <p className="text-sm font-Poppins text-black ml-2" key={i}>
                    {d},
                  </p>
                ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1>Location</h1>
          {User.address !== null && (
            <div className="flex flex-row gap-6">
              <img className="w-[24px] h-[24px]" src="public/images/map-marker.svg" alt="" />
              <p className="w-[164px] h-[24px] text-[#686B6F]">Lagos, Nigeria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
