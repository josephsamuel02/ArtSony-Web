import { useState } from "react";

const MessageCard = () => {
  const [cardSate, setCardState] = useState("open");
  const [selectedChat, setSelectedChat] = useState(0);
  const onlineChats = [
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
    { image: "/images/Ellipse 10 (1).svg", name: "James Christopher" },
  ];
  return (
    <div
      className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex items-center   backdrop-brightness-50 backdrop-blur-xs z-50
    ${cardSate == "close" ? "hidden" : "flex"}
    
    `}
    >
      <div className="m-0 relative w-full h-[740px] flex flex-row   bg-white shadow-lg rounded-md z-20">
        <div className="m-0   w-2/6 h-full flex flex-col border-r border-[#F25B3833] ">
          {/* Header text & Button */}
          <div className="m-0 p-6 w-full h-auto flex flex-row    ">
            <div className="w-[160px] flex flex-row ">
              <p className=" font-Poppins text-[24px] text-[#02272F]">Messages</p>
              <img
                src="/images/navigate_next.svg"
                alt=""
                className="    mx-3  w-[40px] h-[40px] cursor-pointer"
              />
            </div>

            <div className=" ml-auto w-[160px] p-2 flex flex-row bg-[#F25B38]  rounded-md justify-end  ">
              <p className=" font-Poppins text-[16px] text-[#ffffff]">Compose</p>
              <img
                src="/images/add_box.svg"
                alt=""
                className="    mx-3  w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>

          {/* Serch Input */}
          <div className="m-0 p-6 w-full h-auto flex  items-center   border-y border-[#F25B3833]  ">
            <div className="m-0   w-full p-4 py-4 rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
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
            <p className="  mx-4 my-4  text-[16px]  font-Poppins text-[#F25B38]">Online</p>
            <div className="w-full h-auto   overflow-x-scroll">
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
                        {d.name}{" "}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/*  All Chats */}
            <p className="  mx-6 my-4  text-[16px]  font-Poppins text-[#F25B38]">Chats</p>
            <div className="w-full h-auto   ">
              <div className="w-full py-4 h-auto  flex flex-col ">
                {onlineChats &&
                  onlineChats.map((d, i) => (
                    <div
                      className={`mx-0 py-3 w-full h-auto  flex flex-row border-l-4 hover:bg-[#e9b5a99c] cursor-pointer ${
                        selectedChat == i
                          ? " bg-[#e9b5a975] border-[#F25B38]"
                          : "border-[#ffffff]"
                      } items-center`}
                      key={i}
                      onClick={() => setSelectedChat(i)}
                    >
                      <img
                        src={d.image}
                        alt=""
                        className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
                      />
                      <div className="w-auto mx-2  flex flex-col">
                        <div className="w-full h-1/2  flex flex-row items-center  ">
                          <h2 className="w-3/5 text-[16px]   font-bold font-Poppins text-black">
                            {d.name}
                          </h2>
                          <p className=" mx-1    justify-end  text-[10px]   font-bold font-Poppins text-[#777777]">
                            9/23/16
                          </p>
                        </div>
                        <div className="w-min py-1 h-1/2 flex flex-row items-center">
                          <p className="truncate w-3/5    text-[14px] text-center font-Poppins text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. rq3rq
                            3c3rq3r 3 r 3
                          </p>
                          <img
                            src="/images/menu.svg "
                            alt=""
                            className="mx-2 w-[16px] h-[10px] justify-end   object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Space */}

        <div className="m-0 w-4/6 h-full b">
          {/* Chat Space  Header   */}
          <div className=" w-full h-auto  p-6 py-4 flex flex-row items-center border-b border-[#F25B3833]  ">
            <div className="mx-auto w-[170px] flex flex-row ">
              <img
                src="/images/Ellipse 10 (1).svg "
                alt=""
                className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
              />
              <div className="w-auto mx-2  flex flex-col">
                <h2 className=" truncate w-full text-[16px]   font-bold font-Poppins text-black">
                  Devon Lane
                </h2>
                <p className="truncate w-full   text-[14px] text-center font-Poppins text-black">
                  Photographer
                </p>
              </div>
            </div>
            {/* Serch Input */}
            <div className="mx-auto  w-3/5 p-4 py-4 rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
              <img
                src="/images/search.svg"
                alt=""
                className="  mx-3 w-[18px] h-[17px] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search Conversation"
                className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[16px] px-2 w-4/5 h-auto outline-none bg-transparent"
              />
            </div>
            <div className=" mx-auto   p-2    " onClick={() => setCardState("close")}>
              <img
                src="/images/close.svg"
                alt=""
                className=" mx-3  w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full  h-full  bg-chat-background"></div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;