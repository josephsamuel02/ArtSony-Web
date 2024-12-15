/* eslint-disable @typescript-eslint/no-explicit-any */

import { MdClose, MdOutlineRemoveRedEye, MdOutlineShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { IoImages } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { AppDispatch } from "../../Redux/store";
import { GetMyArtworks } from "../../Redux/FetchArtwork";
import { GetMyShopArtworks } from "../../Redux/ShopArtworks";
import FormatNumber from "../NumberFormater";
import { CommentOnArt, followUser } from "../../Redux/Engagement";
import socket from "../../utils/socket";

interface cmpState {
  Artwork: any;
  setShowPostData: (item: boolean) => void;
}

const UserPostDetail = ({ Artwork, setShowPostData }: cmpState) => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User?.my_profile.data);
  const userArtworks = useSelector((state: any) => state.FetchArtwork.my_artworks.data);
  const userShopArtworks = useSelector(
    (state: any) => state.ShopArtworks.my_shop_artwork.data
  );

  const [artworkData, setArtworkData] = useState(userArtworks);
  const [shopartworkData, setShopArtworkData] = useState(userShopArtworks);
  const [showSectionTwo, setShowSectionTwo] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  const [message, setMessage] = useState({
    sender: User?.userId,
    receiver: Artwork.userId,
    text: "",
  });

  const onStartNewChat = (data: object) => {
    socket.emit("create_message", data, (response: any) => {
      console.log(response);
    });
  };

  const item = {
    images: [
      "/images/wide image256.svg",
      "/images/wide image256.svg",
      "/images/wide image256.svg",
    ],
    category: "",
    caption: "Lake Side View- Dream Mountain",
    profile_image: "/images/Ellipse 10.svg",
    user_name: "Christine Boluwatife",
    profession: "Landscape Photographer",
    date: " 8th November, 2022",
    likes: 100,
    views: 200,
    messages: 20,
    socials: { facebook: "", x_social: "", instagram: "" },
  };
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        await dispatch(GetMyArtworks(Artwork.userId));
        await dispatch(GetMyShopArtworks(Artwork.userId));

        setArtworkData(userArtworks);
        setShopArtworkData(userShopArtworks);
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full flex flex-col bg-[#0000008e] z-50">
      <div className=" relative w-11/12 h-10/12 md:h-[640px] m-auto flex flex-col md:flex-row bg-white rounded-xl">
        {/* Section 1 */}

        <h3
          onClick={() => setShowPostData(false)}
          className="absolute top-4 right-4 cursor-pointer  z-40"
        >
          <MdClose size={33} color="orangered" />
        </h3>
        <div
          className={`w-full h-full overflow-y-scroll transition-all duration-300 ${
            showSectionTwo ? "md:w-4/5" : "w-full"
          }`}
        >
          <div className="w-full h-auto">
            {/* Content for Section 1 */}
            {Artwork.images.map((d: string, i: number) => (
              <img src={d} alt={`image ${i}`} className="w-full h-auto object-cover" key={i} />
            ))}

            <div className="w-full h-auto p-6">
              {/* Description Section */}
              <h3 className="text-xl font-Poppins py-2 text-black">Description</h3>
              <p className="text-sm text-black font-Roboto leading-6">
                {Artwork.description && Artwork.description}
              </p>

              <div className="flex flex-col items-center justify-center mt-14">
                <div className="relative bg-[url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1718099830/Group_1542_rqqlwm.png)] bg-cover w-[166.77px] h-[166px] text-orange-500">
                  {Artwork.User?.profile_img !== null ? (
                    <img
                      className="absolute mt-5 ml-5 w-[127px] h-[127px] object-center object-cover rounded-full flex"
                      src={Artwork.User?.profile_img}
                      alt="profile image"
                    />
                  ) : (
                    <img
                      className="absolute mt-5 ml-5 w-[127px] h-[126.42] flex"
                      src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718099969/profile_page_image_ohcd63.svg"
                      alt="profile image"
                    />
                  )}
                </div>

                <h3 className="text-xl font-Poppins py-2 text-black mb-6">
                  {Artwork.User?.user_name}
                </h3>

                <div className="w-full h-auto">
                  <h3 className="w-full text-lg font-Poppins font-semibold p-6  text-black border border-t-blue-gray-200">
                    Also by
                    <span className="text-customOrange"> {Artwork.User?.user_name}</span>
                  </h3>

                  <div className="w-full h-auto  grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-white py-5   ">
                    {artworkData &&
                      artworkData.slice(0, 8).map((i: any, n: number) => (
                        <div
                          className=" m-6 w-[260px] h-[170px] rounded-lg relative transform transition-transform duration-300 hover:scale-105"
                          key={n}
                          style={{
                            backgroundImage: `url(${i.images[0]})`, // Dynamically set background image
                            backgroundSize: "cover", // Ensure the image covers the div
                            backgroundPosition: "center", // Center the image
                            backgroundRepeat: "no-repeat", // Prevent the image from repeating
                          }}
                          onClick={() => {
                            //  setShowPostData(true);
                          }}
                        >
                          <div className="absolute bottom-0 left-0 right-0 pb-2 bg-[#0f0f0f2a] h-auto bg-gradient-to-t from-black rounded-b-xl cursor-pointer">
                            <p className="text-[17px] font-Raleway pb-2 pt-1 text-white text-center font-light">
                              {i.artwork_name}
                            </p>
                            <div className="w-full h-auto flex flex-row items-center">
                              <div className="w-1/3 mx-4 items-center flex flex-row">
                                <img
                                  src="/images/favorite.svg"
                                  alt=""
                                  className="w-[20px] h-[18px] mx-2"
                                />
                                {i.likes.length > 0 && (
                                  <p className="text-[10px] font-Raleway text-white text-center font-light">
                                    {FormatNumber(i.likesCount)}
                                  </p>
                                )}
                                <img
                                  src="/images/visibility.svg"
                                  alt=""
                                  className="w-[20px] h-[18px] mx-2"
                                />
                                {i.views > 0 && (
                                  <p className="text-[10px] font-Raleway text-white text-center font-light">
                                    {FormatNumber(i.views)}
                                  </p>
                                )}
                              </div>
                              <div className="w-2/3 px-4 flex flex-row items-center justify-end">
                                {i.User?.user_name && (
                                  <p className="text-[14px] px-2 font-Poppins text-white">
                                    {i.User?.user_name}
                                  </p>
                                )}
                                {i.User?.profile_img && (
                                  <img
                                    src={i.User?.profile_img}
                                    alt=""
                                    className="w-[38px] h-[38px] mx-1 rounded-full"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Art for Sale */}

                  <h3 className="text-lg font-Poppins font-semibold  p-6  text-black border border-t-blue-gray-200">
                    Also by
                    <span className="text-customOrange"> {Artwork.User?.user_name}</span> for
                    sale
                  </h3>

                  <div className="w-full h-auto  grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-white py-5   ">
                    {shopartworkData &&
                      shopartworkData.slice(0, 8).map((i: any, n: number) => (
                        <div
                          className=" m-6 w-[260px] h-[170px] rounded-lg relative transform transition-transform duration-300 hover:scale-105"
                          key={n}
                          style={{
                            backgroundImage: `url(${i.images[0]})`, // Dynamically set background image
                            backgroundSize: "cover", // Ensure the image covers the div
                            backgroundPosition: "center", // Center the image
                            backgroundRepeat: "no-repeat", // Prevent the image from repeating
                          }}
                          onClick={() => {
                            //  setShowPostData(true);
                          }}
                        >
                          <div className="absolute bottom-0 left-0 right-0 pb-2 bg-[#0f0f0f2a] h-auto bg-gradient-to-t from-black rounded-b-xl cursor-pointer">
                            <p className="text-[17px] font-Raleway pb-2 pt-1 text-white text-center font-light">
                              {i.artwork_name}
                            </p>
                            <div className="w-full h-auto flex flex-row items-center">
                              <div className="w-1/3 mx-4 items-center flex flex-row">
                                <img
                                  src="/images/favorite.svg"
                                  alt=""
                                  className="w-[20px] h-[18px] mx-2"
                                />
                                {i.likes.length > 0 && (
                                  <p className="text-[10px] font-Raleway text-white text-center font-light">
                                    {FormatNumber(i.likesCount)}
                                  </p>
                                )}
                                <img
                                  src="/images/visibility.svg"
                                  alt=""
                                  className="w-[20px] h-[18px] mx-2"
                                />
                                {i.views > 0 && (
                                  <p className="text-[10px] font-Raleway text-white text-center font-light">
                                    {FormatNumber(i.views)}
                                  </p>
                                )}
                              </div>
                              <div className="w-2/3 px-4 flex flex-row items-center justify-end">
                                {i.User?.user_name && (
                                  <p className="text-[14px] px-2 font-Poppins text-white">
                                    {i.User?.user_name}
                                  </p>
                                )}
                                {i.User?.profile_img && (
                                  <img
                                    src={i.User?.profile_img}
                                    alt=""
                                    className="w-[38px] h-[38px] mx-1 rounded-full"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <Comments Artwork={Artwork} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className={`absolute md:relative w-full md:w-1/5 h-full py-3 px-3.5 bg-white rounded-r-xl transition-transform duration-300 md:translate-x-0 ${
            showSectionTwo ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Section 2 Content */}
          <div className="flex flex-row items-center space-x-60">
            <h3 className="py-4 text-[#504f4f] text-[19px] font-Poppins">Owner</h3>
          </div>
          <div className="mx-auto w-full flex flex-row items-center">
            {Artwork.User?.profile_img && (
              <img
                src={Artwork.User?.profile_img}
                className="m-1 w-12 h-12 object-cover rounded-full"
              />
            )}
            <div className="flex flex-col pl-3">
              <h1 className="text-[#F25B38] text-[13px] font-Raleway">
                {Artwork.User?.user_name}
              </h1>
              <p className="text-[#0a0a0a] text-[11px] font-light font-Raleway">
                {Artwork.User?.profession}
              </p>
            </div>
          </div>

          {User && (
            <div className="flex flex-col mt-5 gap-2">
              <div
                className="bg-lightOrange hover:bg-customOrange py-3 my-2 text-customOrange hover:text-white rounded-md gap-1 flex flex-row border border-[#fcac9a69] justify-center items-center"
                onClick={() =>
                  dispatch(
                    followUser({
                      userId: Artwork.userId,
                      user_id: User?.userId,
                      user_name: User?.user_name,
                      profile_img: User?.profile_image,
                    })
                  )
                }
              >
                <IoMdPersonAdd size={15} />
                <button className="text-center  ml-1 text-xs">Follow</button>
              </div>
              <div className=" relative flex flex-row bg-lightOrange  hover:bg-customOrange py-3  text-customOrange  hover:text-white  border border-[#fcac9a69]   justify-center gap-1 rounded-md items-center">
                <div
                  className="flex flex-row"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowChatBox(!showChatBox);
                  }}
                >
                  <FaRegEnvelope size={15} />
                  <button className="text-center ml-1 text-xs ">Message</button>
                </div>
                {showChatBox && (
                  <div className="absolute top-[40px] mx-auto p-2 w-full h-auto flex flex-col items-center rounded-lg bg-white border border-[#fa843f4b]">
                    <textarea
                      name="chat box"
                      placeholder="Enter message..."
                      onChange={(e) => {
                        e.stopPropagation();
                        setMessage((prev) => ({
                          ...prev,
                          text: e.target.value,
                        }));
                      }}
                      className=" resize-none w-full h-[70px] p-1 text-xs text-gray-900 font-Poppins rounded-md border border-[#da624d8a] outline-none"
                    ></textarea>
                    <input
                      type="button"
                      value="Send"
                      onClick={() => {
                        setShowChatBox(false);
                        onStartNewChat(message);
                      }}
                      className="mx-auto my-2 w-full h-auto py-2 text-center text-white bg-customOrange hover:bg-[#da4b32] rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <hr className="py-3 mt-3" />
          <p className="text-[#02272F] text-bold font-Poppins text-[16px]  ">
            {Artwork.artwork_name}
          </p>
          <div className="mx-auto py-3 w-full">
            <p className="py-1">{item.category}</p>
            <p className="py-1 text-xs text-customOrange">
              Published:
              {formatDistanceToNow(new Date(Artwork.createdAt), { addSuffix: true })}
            </p>
            <div className="  w-4/5 pt-3 flex flex-row gap-3 items-center py-1 cursor-pointer">
              <div className="mx-auto flex flex-row gap-1 items-center">
                <MdOutlineRemoveRedEye color={"#F25B38"} size={20} />
                {Artwork.views > 0 && (
                  <p className="text-xs font-Poppins  ">{FormatNumber(Artwork.views)}</p>
                )}
              </div>
              <div className="mx-auto flex flex-row gap-1 items-center">
                <AiOutlineHeart color={"#F25B38"} size={20} />
                {Artwork.likesCount > 0 && (
                  <p className="text-xs font-Poppins  ">{FormatNumber(Artwork.likesCount)}</p>
                )}
              </div>
              <div className="mx-auto flex flex-row gap-1 items-center">
                <BiMessage color={"#F25B38"} size={20} />
                {Artwork.comments.length > 0 && (
                  <p className="text-xs font-Poppins  ">
                    {FormatNumber(Artwork.comments.length)}
                  </p>
                )}
              </div>
            </div>
          </div>
          <hr className="py-3 mt-3" />
          <div className="flex flex-row items-center gap-7 justify-center space-x-30 cursor-pointer">
            <div className="border py-1 px-2 rounded-md">
              <IoImages color={"#F25B38"} size={16} />
            </div>
            <div className="border py-1 px-2 rounded-md">
              <MdOutlineShare color={"#F25B38"} size={16} />
            </div>
            <div className="border py-1 px-2 rounded-md">
              <BsFlag color={"#F25B38"} size={16} />
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20 cursor-pointer">
            <img
              src="/images/instagram.svg"
              alt="svg"
              className="w-7 h-7 mx-auto object-cover"
            />
            <img
              src="/images/facebook.svg"
              alt="svg"
              className="w-7 h-7 mx-auto object-cover"
            />
            <img
              src="/images/linkedin.svg"
              alt="svg"
              className="w-7 h-7 mx-auto object-cover"
            />
            <img
              src="/images/twitter.svg"
              alt="svg"
              className="w-7 h-7 mx-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Toggle Button for Section 2 */}
      <button
        onClick={() => setShowSectionTwo(!showSectionTwo)}
        className="fixed bottom-4 right-4 md:hidden bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        {showSectionTwo ? <MdClose size={24} /> : <IoImages size={24} />}
      </button>
    </div>
  );
};

const Comments = ({ Artwork }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const User = useSelector((state: any) => state.User?.my_profile.data);

  const [comment, setComment] = useState({
    userId: User?.userId,
    artwork_id: "",
    comment: "",
    user_name: User?.user_name,
    profile_img: User?.profile_img,
  });
  const textareaRef = useRef<HTMLTextAreaElement | any>(null); // Create a ref to reference the textarea

  const clearTextarea = () => {
    textareaRef.current.value = ""; // Clear the value of the textarea
  };
  return (
    <div className="w-full h-full p-1 border border-t-blue-gray-200">
      <h3 className="text-xl font-Poppins py-2 text-black">Comments</h3>

      <div className="w-full h-auto flex flex-col md:flex-row">
        {/* left col */}
        <div className="w-full md:w-4/6 h-auto md:mr-auto flex flex-col border border-[#fa856869] rounded-md">
          {User && (
            <div className="w-full h-auto p-3 flex flex-row  ">
              <img
                src={User?.profile_img ? User?.profile_img : ""}
                alt=""
                className="w-10 h-10 object-cover rounded-full mx-2"
              />
              <div className="flex flex-col w-5/6">
                <textarea
                  name="comment"
                  ref={textareaRef}
                  placeholder="Add a comment"
                  defaultValue=""
                  onChange={(e) =>
                    setComment((prev) => ({
                      ...prev,
                      comment: e.target.value,
                      artwork_id: Artwork.artwork_id,
                    }))
                  }
                  className="resize-none w-full h-[80px] text-xs font-Poppins p-2 border border-[#ecbc9c] rounded-lg outline-none"
                ></textarea>

                <input
                  type="button"
                  value="Post"
                  onClick={() => {
                    dispatch(CommentOnArt(comment));
                    setComment({
                      userId: User?.userId,
                      artwork_id: "",
                      comment: "",
                      user_name: User?.user_name,
                      profile_img: User?.profile_img,
                    });
                    clearTextarea();
                  }}
                  className="text-md text-customOrange hover:bg-[#fddbd2] my-3 py-2 px-10 border border-[#ecbc9ca2] rounded-md ml-auto cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="w-full h-auto flex-flex-col px-2 items-center border border-t-[#ecbc9c] pt-6">
            <div className="w-full h-auto  " />

            {Artwork.comments &&
              Artwork.comments.map((d: any, i: number) => (
                <div className="flex flex-row items-center" key={i}>
                  <img
                    src={d.profile_img && d.profile_img}
                    alt=""
                    className="w-10 h-10 object-cover object-center mr-2 rounded-full"
                  />

                  <div className="flex flex-col py-3 w-10/12">
                    <h3 className="text-sm font-semibold font-Raleway">{d.user_name}</h3>

                    <div className="flex flex-row  ">
                      <p className="text-[12px] font-Poppins w-full leading-5">{d.comment}</p>

                      {/* <span className="text-xs pl-1 text-blue-gray-500 ml-auto">Date</span> */}
                    </div>
                  </div>
                </div>
              ))}

            <h3 className="text-sm py-2  text-center text-customOrange font-Poppins">
              See all comments
            </h3>
          </div>
        </div>
        {/* right col */}
        <div className="w-full md:w-[250px] h-auto md:ml-1 py-2 flex flex-col  border border-[#fa856869] rounded-md">
          <h3 className="text-md font-Poppins px-2 pb-3 text-black">Appreciation</h3>
          {Artwork &&
            Artwork.co_owners.map((d: any, i: number) => (
              <div className="w-full mt-1 h-auto flex flex-row items-center" key={i}>
                <img
                  src={d?.profile_img ? d?.profile_img : ""}
                  alt=""
                  className="w-8 h-8 object-cover rounded-full ml-2"
                />

                <p className="ml-1 text-xs text-black font-Poppins">
                  {d.user_name ? d.user_name : ""}
                </p>

                <h3
                  className="ml-auto mr-2 text-xs text-customOrange font-Poppins py-1.5 px-4 bg-[#fa856844] hover:bg-[#fa856888] border border-[#fa856869] rounded cursor-pointer"
                  onClick={() =>
                    dispatch(
                      followUser({
                        userId: d.userId,
                        user_id: User?.userId,
                        user_name: User?.user_name,
                        profile_img: User?.profile_image,
                      })
                    )
                  }
                >
                  Follow
                </h3>
              </div>
            ))}
          <h3 className="mx-6 mt-4 text-sm text-black font-Poppins   ">
            This art was created for
          </h3>
          {Artwork &&
            Artwork.designed_for.map((d: any, i: number) => (
              <h3
                className=" mx-auto mt-4 w-10/12 text-xs text-center text-black font-Poppins py-1.5  bg-[#fcd7cd21] border border-[#fa856869] rounded-sm"
                key={i}
              >
                {d}
              </h3>
            ))}

          <div className="w-full flex flex-col px-2">
            <h3 className="ml-3 mt-4 mb-1 text-sm text-black font-Poppins ">Art Field</h3>

            <div className="w-max grid grid-flow-row grid-cols-3">
              {Artwork &&
                Artwork.art_field.map((d: any, i: number) => (
                  <span
                    className=" mx-0.5 mt-2 w-min px-3 py-1.5  text-[10px] text-center text-black font-Poppins   bg-[#fa856844] border border-[#fa856869] rounded"
                    key={i}
                  >
                    {d}
                  </span>
                ))}
            </div>

            <h3 className="ml-3 mt-4 mb-1 text-sm text-black font-Poppins ">Tools</h3>
            <div className="w-max grid grid-flow-row grid-cols-3">
              {Artwork &&
                Artwork.tools.map((d: any, i: number) => (
                  <span
                    className=" mx-0.5 mt-2 w-min px-3 py-1.5  text-[10px] text-center text-black font-Poppins   bg-[#fa856844] border border-[#fa856869] rounded"
                    key={i}
                  >
                    {d}
                  </span>
                ))}
            </div>
            <h3 className="ml-3 mt-4 mb-1 text-sm text-black font-Poppins ">Tags</h3>
            <div className="w-max grid grid-flow-row grid-cols-3">
              {Artwork &&
                Artwork.tags.map((d: any, i: number) => (
                  <span
                    className=" mx-0.5 mt-2 w-min px-3 py-1.5  text-[10px] text-center text-black font-Poppins   bg-[#fa856844] border border-[#fa856869] rounded"
                    key={i}
                  >
                    {d}
                  </span>
                ))}
            </div>

            <p className=" mt-10 text-[10px] font-Poppins text-center text-blue-gray-600">
              {Artwork.copyright_license && Artwork.copyright_license[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostDetail;
