/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { MdOutlineArchive, MdSend } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import Icons from "./Icons";
import socket from "../../../utils/socket";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import _ from "lodash";
import { formatDistanceToNow } from "date-fns";
const MessageCard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [cardSate, setCardState] = useState("open");
  const [selectedChat, setSelectedChat] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  // const onlineChats = [
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  //   { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  // ];
  const userId = localStorage.getItem("artsoney_user_id");
  const [chatId, setChatId] = useState("chatId");
  const [allChatMessages, setAllChatMessages] = useState<any>();
  const [chatMessages, setChatMessages] = useState<any>({
    id: chatId,
    receiverUser: {},
    senderUser: {},
    content: [],
  });

  const [message, setMessage] = useState<object>({
    id: chatId,
    user_id: userId,
    text: "",
    url: "",
    image: "",
  });

  const [cOption, setC_Options] = useState("Messages");
  const [showCOptions, setShowCOptions] = useState(false);

  const chatOptions = [
    { title: "Messages", icon: <BiEnvelopeOpen size={23} color="#F25B38" className="mx-2" /> },
    {
      title: "Archived",
      icon: <MdOutlineArchive size={23} color="#F25B38" className="mx-2" />,
    },
    {
      title: "Settings",
      icon: <MdOutlineSettings size={23} color="#F25B38" className="mx-2" />,
    },
  ];

  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowCOptions(false);
    }
  };

  const sendMessage = () => {
    // Emit a message to the server
    socket.emit("send_message", message);
  };

  const fetchMessages = (chatId: string) => {
    // Emit the "get_messages" event with the required data
    socket.emit("get_messages", { id: chatId });
    setChatId(chatId);
    // Listen for the response with the chat ID

    // Listen for errors
    socket.on("error", (errorMessage) => {
      console.log(errorMessage);
    });
  };

  useEffect(() => {
    // dispatch(getAllMessages());

    socket.emit("get_all_user_messages", (response: any) => {
      setAllChatMessages(response);
    });

    socket.on("get_all_user_messages", (data) => {
      setAllChatMessages(data);
    });

    socket.on(chatId, (data: any) => {
      setChatMessages(data.data);
    });

    // Clean up on unmount
    return () => {
      socket.off("message");
      socket.off("connect");
    };
  }, [chatId, dispatch, userId]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on(`${userId}`, (response: any) => {
      setMessage(response);
    });
    // socket.on("send_message", (response: any) => {
    //   // console.log(response);
    // });
  }, [userId]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);
  return (
    <div
      className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex items-center backdrop-brightness-50 backdrop-blur-sm z-50
    ${cardSate == "close" ? "hidden" : "flex"}
    
    `}
    >
      <div className="m-auto relative w-11/12 md:w-[1280px] h-full md:h-[660px] flex flex-row bg-white shadow-lg rounded-md z-20">
        <div className="m-0   w-[440px] h-full flex flex-col border-r border-[#F25B3833] ">
          {/* Header text & Button */}
          <div className="m-0 p-6 w-full h-auto flex flex-row ">
            <div className="relative w-[160px] flex flex-row ">
              <p className=" font-Poppins text-[24px] text-[#02272F]">{cOption}</p>
              <img
                src="/images/navigate_next.svg"
                alt=""
                className="mx-3  w-[40px] h-[40px] cursor-pointer"
                onClick={() => setShowCOptions(!showCOptions)}
              />
              {showCOptions && (
                <div
                  ref={modalRef}
                  className="absolute left-0 top-10 flex flex-col w-[197px] rounded"
                >
                  {chatOptions.map((d, i) => (
                    <p
                      className={`text-[14px] bg-[#FEF7F5] p-4 flex flex-row items-center hover:bg-[#f5b0a0] cursor-pointer ${
                        cOption == d.title
                          ? "border-l-2 text-[#F25B38] border-[#F25B38]"
                          : "text-black border-l-2 border-[#ffffff]"
                      }`}
                      key={i}
                      onClick={() => setC_Options(d.title)}
                    >
                      {d.icon} {d.title}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className=" ml-auto w-[160px] p-2 flex flex-row bg-[#F25B38]  rounded-md justify-end  ">
              <p className=" font-Poppins text-[16px] text-[#ffffff]">Compose</p>
              <img
                src="/images/add_box.svg"
                alt=""
                className=" mx-3  w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>

          {/* Search Input */}
          <div className="m-0 p-6   py-6 w-full h-auto flex  items-center   border-y border-[#F25B3833]  ">
            <div className="m-0   w-full p-4 py-2 rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
              <img
                src="/images/search.svg"
                alt=""
                className="  mx-3 w-[18px] h-[17px] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search Username"
                className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[16px] px-2 w-4/5 h-auto outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-full h-[700px] overflow-x-hidden  overflow-y-scroll">
            {/* Online Chats */}
            {/* <p className="  mx-4 my-4 text-[16px]  font-Poppins text-[#F25B38]">Online</p>
            <div className="w-full h-auto overflow-x-scroll">
              <div className="w-max py-4 h-auto  flex flex-row ">
                {onlineChats &&
                  onlineChats.map((d, i) => (
                    <div
                      className="mx-5 w-[72px] h-auto relative flex flex-col rounded-full"
                      key={i}
                    >
                      <img
                        src={d.image}
                        alt=""
                        className="w-[72px] h-[72px] rounded-full object-cover"
                      />

                      <span className="absolute bottom-8 right-0  p-[7px] bg-[#28DA24] rounded-full"></span>

                      <p className="truncate  text-[14px] text-center font-Poppins text-black">
                        {d.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div> */}

            {/*  All Chats */}
            <p className="mx-6 my-4 text-[16px] font-Poppins text-[#F25B38]">Chats</p>
            <div className="w-full h-auto   ">
              <div className="w-full py-4 h-auto  flex flex-col ">
                {allChatMessages &&
                  allChatMessages.data.map((d: any, i: any) => (
                    <div
                      className={`mx-0 py-3 w-full h-auto  flex flex-row border-l-4 hover:bg-[#e9b5a99c] cursor-pointer ${
                        selectedChat == i
                          ? " bg-[#e9b5a975] border-[#F25B38]"
                          : "border-[#ffffff]"
                      } items-center`}
                      key={i}
                      onClick={() => {
                        fetchMessages(d.id);
                        setSelectedChat(i);
                        setChatId(allChatMessages.data[i].id);
                        setMessage((prev) => ({ ...prev, id: allChatMessages.data[i].id }));
                      }}
                    >
                      <div className="flex flex-col">
                        {d.sender !== userId && (
                          <div className="flex flex-row">
                            <img
                              src={d.senderUser.profile_img ? d.senderUser.profile_img : ""}
                              alt=""
                              className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
                            />
                            <div className="w-auto mx-2 flex flex-col">
                              <div className="w-full h-1/2 flex flex-row items-center">
                                <h2 className="text-[16px] font-bold font-Poppins text-black">
                                  {d.senderUser.user_name}
                                </h2>
                              </div>
                              <div className="w-min py-1 h-1/2 flex flex-row items-center">
                                <p className="truncate w-3/5 text-[14px] text-center font-Poppins text-black">
                                  {/* {d.content.pop().text} */}
                                  {Array.isArray(d.content) &&
                                    (_.last(d.content)?.text as string)}
                                </p>
                              </div>
                              <span className="justify-end  text-[10px] font-bold font-Poppins text-[#777777]">
                                {formatDistanceToNow(new Date(d.updatedAt), {
                                  addSuffix: true,
                                })}
                              </span>
                            </div>
                          </div>
                        )}

                        {d.receiver !== userId && (
                          <div className="flex flex-row">
                            <img
                              src={
                                d.receiverUser.profile_img ? d.receiverUser.profile_img : ""
                              }
                              alt=""
                              className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
                            />
                            <div className="w-auto mx-2  flex flex-col">
                              <div className="w-full h-1/2  flex flex-row items-center  ">
                                <h2 className=" text-[16px] font-bold font-Poppins text-black">
                                  {d.receiverUser.user_name}
                                </h2>
                              </div>
                              <div className="w-min py-1 h-1/2 flex flex-row items-center">
                                <p className="truncate w-3/5 text-[14px] text-center font-Poppins text-black">
                                  {/* {d.content.pop().text} */}
                                  {Array.isArray(d.content) &&
                                    (_.last(d.content)?.text as string)}
                                </p>
                              </div>
                              <span className="  justify-end  text-[10px]   font-bold font-Poppins text-[#777777]">
                                {formatDistanceToNow(new Date(d.updatedAt), {
                                  addSuffix: true,
                                })}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="m-0 w-4/6 h-full ">
          <div className=" w-full h-auto  p-6 py-4 flex flex-row items-center border-b border-[#F25B3833]  ">
            {chatMessages.senderUser && chatMessages.senderUser.userId !== userId && (
              <div className="mx-auto w-[170px] flex flex-row ">
                <img
                  src={
                    chatMessages.senderUser.profile_img
                      ? chatMessages.senderUser.profile_img
                      : ""
                  }
                  alt="image"
                  className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
                />
                <div className="w-auto mx-2  flex flex-col">
                  <h2 className=" truncate w-full text-[16px]   font-bold font-Poppins text-black">
                    {chatMessages.senderUser.user_name}
                  </h2>
                  <p className="truncate w-full text-[12px] text-center font-Poppins text-black">
                    {/* {chatMessages.senderUser.profession[0] &&
                      chatMessages.senderUser?.profession[0]} */}
                  </p>
                </div>
              </div>
            )}

            {chatMessages.receiverUser && chatMessages.receiverUser.userId !== userId && (
              <div className="mx-auto w-[170px] flex flex-row ">
                <img
                  src={
                    chatMessages.receiverUser.profile_img
                      ? chatMessages.receiverUser.profile_img
                      : ""
                  }
                  alt="image"
                  className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
                />
                <div className="w-auto mx-2  flex flex-col">
                  <h2 className=" truncate w-full text-[16px]   font-bold font-Poppins text-black">
                    {chatMessages.receiverUser.user_name}
                  </h2>
                  <p className="truncate w-full   text-[12px] text-center font-Poppins text-black">
                    {/* {chatMessages.receiverUser.profession[0]} */}
                  </p>
                </div>
              </div>
            )}

            {/* Search Input */}
            <div className="mx-auto  w-3/5 p-4 py-3 rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
              <img
                src="/images/search.svg"
                alt=""
                className=" mx-3 w-[18px] h-[17px] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search Conversation"
                className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[12px] px-2 w-[65%] h-auto outline-none bg-transparent"
              />
            </div>
            <div className=" mx-auto p-2 " onClick={() => setCardState("close")}>
              <img
                src="/images/close.svg"
                alt=""
                className=" mx-3  w-[20px] h-[20px] cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full h-auto bg-chat-background bg-cover">
            <div className="w-full h-auto overflow-y-scroll">
              <div className="w-full h-[510px] flex flex-col">
                {chatMessages.content &&
                  chatMessages?.content.map((d: any, i: number) => (
                    <div
                      className={`w-full h-auto flex ${
                        d.user_id == userId ? "justify-end" : "justify-start"
                      }`}
                      key={i}
                    >
                      <div
                        className={`w-2/5 h-auto flex flex-col ${
                          d.user_id !== userId ? "justify-start" : "justify-end"
                        }`}
                      >
                        <p
                          className={`text-[14px] m-6 my-3 p-4 pb-1 text-white font-Poppins shadow-md rounded-md ${
                            d.user_id == userId ? "bg-[#F25B38]" : "bg-[#02272F]"
                          }`}
                        >
                          {d.text}
                          <p className="text-[10px] mx-[2px] text-right text-[#d9d9d9da] font-Poppins">
                            {formatDistanceToNow(new Date(d.createdAt), {
                              addSuffix: true,
                            })}
                          </p>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div ref={bottomRef} />
            </div>

            <div className="relative w-full h-auto py-2 flex flex-row items-center bg-white shadow-xl">
              <div className="ml-auto py-2 w-10/12 h-auto items-center flex flex-row backdrop-brightness-75 rounded-md bg-[#8F8F8F]">
                <img
                  src="/images/mood.svg"
                  alt=""
                  className=" mx-auto w-[22px] h-[22px] cursor-pointer"
                  onClick={() => setShowIcons(!showIcons)}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setMessage((prev) => ({ ...prev, text: e.target.value }));
                  }}
                  placeholder="your message"
                  className="w-4/6 p-1 px-2 text-[#6b250f] bg-[#ffffff2a] outline-none rounded"
                />

                <img
                  src="/images/attachment.svg"
                  alt=""
                  className=" ml-auto w-[22px] h-[22px]"
                />
                <img
                  src="/images/photo_camera.svg"
                  alt=""
                  className=" mx-4 w-[22px] h-[22px]"
                />
              </div>
              <h3
                className="mx-auto ml-3 px-2.5 py-2 flex items-center bg-customOrange hover:bg-[#e7463a] rounded-lg"
                onClick={() => sendMessage()}
              >
                <MdSend size={30} color="white" />
              </h3>
              {showIcons && <Icons showIcons={showIcons} setShowIcons={setShowIcons} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
