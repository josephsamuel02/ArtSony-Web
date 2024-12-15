/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import ColorPicker from "react-pick-color";
import { useEffect, useRef, useState } from "react";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import SearchResult from "../SearchPage.tsx/SearchResult";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import {
  getNewbiesShopArtwork,
  ShopArtworkJustForYou,
  ShopsArtworks,
  TopShopsArtworks,
} from "../../Redux/ShopArtworks";
import FormatNumber from "../../components/NumberFormater";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LikeArt } from "../../Redux/Engagement";
import { AddToCart } from "../../Redux/Cart";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User.my_profile?.data);
  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);

  const shop_artworks = useSelector((state: any) => state.ShopArtworks?.shop_artworks.data);

  const top_shop_artworks = useSelector(
    (state: any) => state.ShopArtworks.top_shop_artworks.data
  );
  const newbies_shop_artwork = useSelector(
    (state: any) => state.ShopArtworks.newbies_shop_artwork.data
  );
  const shop_artwork_for_you = useSelector(
    (state: any) => state.ShopArtworks.shop_artwork_for_you.data
  );
  const colorpickeralRef = useRef<any>(null);

  // const [showArtistFieldList, setShowArtistFieldList] = useState(false);
  // const [showColorPicker, setShowColorPicker] = useState(false);
  // const [showLocation, setShowLocation] = useState(false);
  const [showPostData, setShowPostData] = useState(false);
  const [showSearchResult] = useState(false);
  const [artworkDetails, setArtworkDetails] = useState("");
  // const [color, setColor] = useState("#3573CB");

  const handleClickOutside = (event: any) => {
    if (colorpickeralRef.current && !colorpickeralRef.current.contains(event.target)) {
      // setShowColorPicker(false);
    }
  };

  const AddCart = (p: any) => {
    const data = {
      userId: p.userId,
      storeId: p.userId,
      product: {
        userId: p.userId,
        storeId: p.userId,
        artwork_id: p.artwork_id,
        images: p.images,
        artwork_name: p.artwork_name,
        price: p.price,
        quantity: 1,

        tags: p.tags,
        tools: p.tools,
        description: p.description,
        artwork_type: p.artwork_type,

        thumbnail: p.thumbnail,
        embed_code: p.embed_code,
        audio_video: p.audio_video,
        animated_3d: p.animated_3d,
      },
    };
    dispatch(AddToCart(data));

    // console.log(data);
  };

  // const capitalizeFirstLetter = (sentence: string) => {
  //   return sentence
  //     .split(" ")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
  //     .join(" ");
  // };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(ShopsArtworks());
      await dispatch(TopShopsArtworks());
      await dispatch(getNewbiesShopArtwork());
      await dispatch(ShopArtworkJustForYou(User?.userId));
    };

    fetchData();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [Artwork, setArtwork] = useState(top_shop_artworks);
  const [selectedMenu, setSelectedMenu] = useState("All");
  const topArtMenu = ["All", "Top Arts", "Newbies", "For You"];

  useEffect(() => {
    // console.log(top_shop_artworks);
    selectedMenu == "All" && setArtwork(shop_artworks);
    selectedMenu == "Top Arts" && setArtwork(top_shop_artworks);
    selectedMenu == "Newbies" && setArtwork(newbies_shop_artwork);
    selectedMenu == "For You" && setArtwork(shop_artwork_for_you);
  }, [selectedMenu]);

  return (
    <div className="w-full h-auto  ">
      <div className="w-full h-auto mx-auto items-center mt-1 bg-white  flex flex-col ">
        <div className="w-full flex flex-row  py-5  items-center">
          <div className="w-4/5 mx-auto flex flex-row items-center bg-white">
            {topArtMenu &&
              topArtMenu.map((d, i) => (
                <h3
                  className={`text-[22px]  mx-5 font-Poppins text-black border-b-4 cursor-pointer ${
                    selectedMenu == d ? "border-[#F25B38]" : "border-[#ffff]"
                  }`}
                  key={i}
                  onClick={() => setSelectedMenu(d)}
                >
                  {d}
                </h3>
              ))}
          </div>
        </div>

        <div className="w-full h-auto mx-auto items-center bg-white grid gap-2  grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {Artwork &&
            Artwork.slice(0, 10).map((d: any, i: number) => {
              const isLiked = d.likes?.some((like: any) => like.userId === userId);
              return (
                <div
                  className=" relative mx-auto w-[304px] h-[207px] my-10 bg-white rounded-lg   cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    setArtworkDetails(d);
                    setShowPostData(true);
                  }}
                  key={i}
                >
                  <img
                    src={d.images[0]}
                    alt=""
                    className=" mx-auto w-full rounded-t-lg h-full object-cover"
                  />
                  {User && (
                    <div
                      className=" absolute mx-2 top-2 lef-2 cursor-pointer items-center w-9 h-8 p-1 flex rounded  bg-[#05000060] "
                      onClick={(e) => {
                        e.stopPropagation();
                        AddCart(d);
                        // setProduct((prev) => ({ ...prev, product: d }));
                      }}
                    >
                      <IoCartOutline size={26} className="text-white hover:text-[#fa6746]" />
                    </div>
                  )}
                  <div className="absolute  bottom-7 left-0 right-0 bg-[#0707072c] h-1/4 bg-gradient-to-t  from-black">
                    <p className="text-[19px] pb-4 pt-2 font-Raleway text-white text-center font-light ">
                      {d.artwork_name}
                    </p>

                    <div className="w-full bottom-0 h-[60px] border border-[#bdbdbd75] rounded-b bg-white flex flex-row items-center">
                      <div className="w-2/3 px-4 flex flex-row items-center justify-start  rounded-b">
                        {d.user.profile_img && (
                          <img
                            src={d.user.profile_img}
                            alt=""
                            className="w-[35px] h-[35px] mx-0 rounded-full"
                          />
                        )}
                        <p className="text-[11px] px-2 font-Poppins text-black ">
                          {d.user.user_name}
                        </p>
                      </div>

                      <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                        <div className="flex  items-center">
                          <div className="flex justify-between items-center">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                userId &&
                                  dispatch(
                                    LikeArt({ userId: userId, artwork_id: d.artwork_id })
                                  );
                              }}
                            >
                              {isLiked ? (
                                <AiFillHeart
                                  size={30}
                                  className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                                />
                              ) : (
                                <AiOutlineHeart
                                  size={30}
                                  className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                                />
                              )}
                            </div>
                            {d.likesCount > 0 && (
                              <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light ">
                                {FormatNumber(d.likesCount)}
                              </p>
                            )}
                          </div>
                        </div>
                        <img
                          src="/images/visibility.svg"
                          alt=""
                          className="w-[20px] h-[18px] mx-2 "
                        />
                        {d.views > 0 && (
                          <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light ">
                            {FormatNumber(d.views)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* advert */}
      <div className="w-full h-[400px] my-10 object-cover bg-cover bg-shop-add-one">
        <div className="w-1/2 p-10 pt-6">
          <h3 className="text-customOrange text-[35px] font-Raleway">
            Become An Artsony Artist
          </h3>
          <p className="py-2 text-[25px] font-Poppins text-white font-light">
            Sell your marvelous creation on Artsony Shop, Grow your audience and your career as
            an artist.
          </p>
          <h3 className="my-5 w-[290px] py-4 px-4  text-white font-Poppins text-center shadow-sm shadow-gray-600   text-[20px] rounded backdrop-opacity-75   bg-[#f25a38d7] hover:bg-[#c74141] cursor-pointer">
            Become a Seller ?
          </h3>
          <div className="w-full h-auto pt-8  flex flex-row justify-start items-center">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="font-Poppins font-light text-[14px] text-white mx-4 ">
              Grace Bamidele
            </p>
          </div>
        </div>
      </div>

      {/* other contents */}
      <div className="w-full h-auto px-2">
        <div className="w-full h-auto mx-auto items-center bg-white py-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shop_artworks &&
            shop_artworks.map((i: any, n: number) => {
              const isLiked = i.likes?.some((like: any) => like.userId === userId);
              return (
                <div
                  className=" relative mx-auto w-[304px] h-[207px] my-10 bg-white rounded-lg   cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    setArtworkDetails(i);
                    setShowPostData(true);
                  }}
                  key={n}
                >
                  <img
                    src={i.images[0]}
                    alt=""
                    className=" mx-auto w-full rounded-t-lg h-full object-cover"
                  />
                  {User && (
                    <div
                      className=" absolute mx-2 top-2 lef-2 cursor-pointer items-center w-9 h-8 p-1 flex rounded  bg-[#05000060] "
                      onClick={(e) => {
                        e.stopPropagation();
                        AddCart(i);
                      }}
                    >
                      <IoCartOutline size={26} className="text-white hover:text-[#fa6746]" />
                    </div>
                  )}
                  <div className="absolute  bottom-7 left-0 right-0 bg-[#0707072c] h-1/4 bg-gradient-to-t  from-black">
                    <p className="text-[19px] pb-4 pt-2 font-Raleway text-white text-center font-light ">
                      {i.artwork_name}
                    </p>

                    <div className="w-full bottom-0 h-[60px]  border border-[#bdbdbd75] rounded-b bg-white flex flex-row items-center">
                      <div className="w-2/3 px-4 flex flex-row items-center justify-start  rounded-b">
                        {i.user.profile_img && (
                          <img
                            src={i.user.profile_img}
                            alt=""
                            className="w-[35px] h-[35px] mx-0 rounded-full"
                          />
                        )}
                        <p className="text-[11px] px-2 font-Poppins text-black ">
                          {i.user.user_name}
                        </p>
                      </div>

                      <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                        <div className="flex  items-center">
                          <div className="flex justify-between items-center">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                userId &&
                                  dispatch(
                                    LikeArt({ userId: userId, artwork_id: i.artwork_id })
                                  );
                              }}
                            >
                              {isLiked ? (
                                <AiFillHeart
                                  size={30}
                                  className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                                />
                              ) : (
                                <AiOutlineHeart
                                  size={30}
                                  className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                                />
                              )}
                            </div>
                            {i.likesCount > 0 && (
                              <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light ">
                                {FormatNumber(i.likesCount)}
                              </p>
                            )}
                          </div>
                        </div>
                        <img
                          src="/images/visibility.svg"
                          alt=""
                          className="w-[20px] h-[18px] mx-2 "
                        />
                        {i.views > 0 && (
                          <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light ">
                            {FormatNumber(i.views)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {showSearchResult && <SearchResult />}
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

// const ArtisticField = ({ showArtistFieldList, setShowArtistFieldList }: any) => {
//   const artFieldRef = useRef<any>(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();
//   const Fields = [
//     "Random",
//     "Ai Art",
//     "Architecture",
//     "Space",
//     "Painting",
//     "Plant Life",
//     "Abstract",
//     "Medieval",
//     "Futuristic",
//     "Animation",
//     "Spiritual",
//   ];

//   const getArtByField = async (field: string) => {
//     dispatch(getArtworksByArtField({ art_field: field }));
//     navigate(`${PUBLIC_ROUTES.EXPLORE}?art_field=${field}`);
//   };

//   const handleClickOutside = (event: any) => {
//     if (artFieldRef.current && !artFieldRef.current.contains(event.target)) {
//       setShowArtistFieldList(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   return (
//     <>
//       {showArtistFieldList && (
//         <div
//           className="absolute top-12 w-[270px] h-[329px] bg-white shadow-md rounded-md z-30 overflow-y-scroll"
//           ref={artFieldRef}
//         >
//           <div className="mx-auto  w-11/12 p-2 px-4  rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
//             <img
//               src="/images/search.svg"
//               alt=""
//               className=" w-[16px] h-[15px] cursor-pointer"
//             />
//             <input
//               type="text"
//               placeholder="Search Artistic Field"
//               className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[12px] px-2 w-4/5 h-auto outline-none bg-transparent"
//             />
//           </div>

//           <div className="w-full h-auto py-4 px-6 bg-white flex flex-col    border-t border-[#fadad3]">
//             <p className=" text-[16px] py-2 text-[#F25B38] font-Poppins  ">
//               All Artistic Fields
//             </p>
//             <p className=" text-[16px]  py-2  text-[#000000] font-Poppins  ">#</p>
//             {Fields.map((d: string, i: number) => (
//               <p
//                 className=" text-[16px] py-2  text-[#000000] hover:text-customOrange font-Poppins cursor-default"
//                 key={i}
//                 onClick={() => getArtByField(d)}
//               >
//                 {d}
//               </p>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const ArtLocation = ({ showLocation, setShowLocation }: any) => {
//   const modalRef = useRef<any>(null);

//   const handleClickOutside = (event: any) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setShowLocation(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   return (
//     <>
//       {showLocation && (
//         <div
//           className="absolute top-12 w-[270px] h-[329px] bg-white shadow-md rounded-md z-30 overflow-y-scroll"
//           ref={modalRef}
//         >
//           <div className="mx-auto  w-11/12 p-2 px-4  rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
//             <img
//               src="/images/search.svg"
//               alt=""
//               className="    w-[16px] h-[15px] cursor-pointer"
//             />
//             <input
//               type="text"
//               placeholder="Search Artistic Field"
//               className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[12px] px-2 w-4/5 h-auto outline-none bg-transparent"
//             />
//           </div>

//           <div className="w-full h-auto py-4 px-6 bg-white flex flex-col    border-t border-[#fadad3]">
//             <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
//               Afghanistan
//             </p>
//             <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
//               Alan Island
//             </p>
//             <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
//               Albania
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
{
  /* <div className="mx-auto w-full h-[80px]  px-6 flex flex-row items-center ">
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowArtistFieldList(true)}
        >
          <img src="/images/interests.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Artistic Field
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
          {showArtistFieldList && (
            <ArtisticField
              showArtistFieldList={showArtistFieldList}
              setShowArtistFieldList={setShowArtistFieldList}
            />
          )}
        </div>
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <img src="/images/colors.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Color
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
          {showColorPicker && (
            <div
              ref={colorpickeralRef}
              className="absolute top-12 w-[250px]  bg-white shadow-md rounded-md z-30  "
            >
              <ColorPicker
                color={color}
                onChange={(color: any) => setColor(color.hex)}
                theme={{
                  borderRadius: "2px",
                  width: "200px",
                }}
              />
            </div>
          )}
        </div>
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowLocation(true)}
        >
          <img src="/images/location.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Location
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />

          {showLocation && (
            <ArtLocation showLocation={showLocation} setShowLocation={setShowLocation} />
          )}
        </div>
        <p className="mx-auto text-[16px] font-Poppins text-[#F25B38] cursor-default">
          Clear All
        </p>
        <div className="w-[178px] h-[42px] mx-auto flex flex-row rounded border border-[#F25B38] items-center bg-white">
          <p className="mx-auto text-sm font-Poppins text-black cursor-default">Recommended</p>
          <img src="/images/arrow_drop_down black.svg" alt="" className="mx-4" />
        </div>
      </div> */
}
export default Products;
