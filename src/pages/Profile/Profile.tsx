


import Loadmore from "./Loadmore";
import { Profilemain } from "./Profilemain.1";

function Profile() {
  return (
    <div className='w-full'>
      <header
        className="w-full relative bg-no-repeat bg-center bg-cover mb-80"
        style={{
          width: '1728px',
          height: '513px',
          backgroundImage: "url('/images/Rectangle 276.svg')"
        }}
      >
        <div className="flex items-center justify-between h-20 px-5 max-w-full mx-auto bg-black bg-opacity-60 backdrop-filter backdrop-blur-md border border-white border-opacity-20 rounded-lg">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-[165px] h-[48px] opacity-100"
          />
          <nav className="flex items-center gap-4">
            <a
              href="#explore"
              className="w-[65px] h-[48px] flex items-center justify-center font-poppins font-semibold text-[16px] leading-[24px] text-center text-white"
            >
              Explore
            </a>
            <a
              href="#shop"
              className="w-[64px] h-[48px] flex items-center justify-center font-poppins font-semibold text-[16px] leading-[24px] text-center text-white"
            >
              Shop
            </a>
            <a
              href="#hire-artist"
              className="w-[105px] h-[48px] flex items-center justify-center font-poppins font-semibold text-[16px] leading-[24px] text-center text-white"
            >
              Hire Artist
            </a>
            <a
              href="#find-gigs"
              className="w-[106px] h-[48px] flex items-center justify-center font-poppins font-semibold text-[16px] leading-[24px] text-center text-white"
            >
              Find Gigs
            </a>
          </nav>
          <input
            type="text"
            placeholder="Search"
            className="w-[475px] h-[46px] p-2 border border-gray-400 text-black bg-transparent rounded-md opacity-100"
          />
          <div className="flex items-center gap-6">
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716799784/icon1_qa1o5a.svg"
              alt="Icon 1"
              className="w-[36px] h-[46px] opacity-100"
            />
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716799869/icon2_unzvoa.svg"
              alt="Icon 2"
              className="w-[36px] h-[48px] opacity-100"
            />
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716799914/notifications_ty8ury.svg"
              alt="Icon 3"
              className="w-[44px] h-[56px] opacity-100"
            />
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716799640/mssg_jix17z.svg"
              alt="Icon 4"
              className="w-[50px] h-[56px] opacity-100"
            />
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716799972/icon5_xnqmze.svg"
              alt="Icon 5"
              className="w-[36px] h-[48px] opacity-100"
            />
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800008/icon6_izsq9j.svg"
              alt="Icon 6"
              className="w-[76px] h-[40px] border border-solid border-gray-400 opacity-100"
            />
          </div>
        </div>
        <div className="absolute" style={{ top: '120px', left: '627px' }}>
          <div className="w-[475px] h-[553px] border border-solid border-[rgba(242,91,56,0.7)] rounded-2xl border-1 border-opacity-50 backdrop-filter backdrop-blur-md p-4 flex flex-col justify-between bg-[rgba(43,43,103,0.5)]">
            <div className="flex items-center justify-center mt-4">
              <img src="/images/Group 1560.svg" alt="Profile" className="w-[166.77px] h-[166px] top-[170px] left-[781px] object-cover rounded-full" />
            </div>
            <div className="text-center mt-4">
              <div className="flex items-center justify-center">
                <h2 className="text-xl font-semibold text-white mr-2">Christine Boluwatife</h2>
                <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800070/iconfbolu_kp0gex.svg" alt="Icon" className="w-6 h-6" />
              </div>
              <div className="flex justify-center items-center mt-14">
                <div className="flex flex-col items-center mr-4 text-white w-[120px] h-[24px]">
                  <p className="text-sm font-normal text-slate-500">34</p>
                  <p className="text-sm text-white-500 font-normal">Following</p>
               
                </div>
                <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800972/Line_16_zomu6j.svg" alt="line" />
                <div className="flex flex-col items-center mt-12 text-white w-[120px] h-[72px]">
                  <p className="text-sm text-slate-500">125k</p>
                  <p className="text-sm text-white-500">Followers</p>
                </div>
                <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800972/Line_16_zomu6j.svg" alt="line" />
                <div className="flex flex-col items-center text-white w-[120px] h-[24px]">
                  <p className="text-sm text-slate-500">670k</p>
                  <p className="text-sm text-white-500">Likes</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around my-6 ">
              <button  className="bg-orange-600 w-[192px] h-[48px] text-white px-4 py-2 rounded-md mr-2 text-lg">
              <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716802356/prsn_s5cqwv.svg " alt="icon" className="inline-block w-6 h-6 mr-2" />
                Follow
                </button>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-md w-[192px] h-[48px] flex gap-[20px] text-lg">
                 <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716802641/mail_ol44yq.svg"  className="w-[20px] h[16px] "alt="message" />
                Message
              </button>
            </div>
            
          </div>
        </div>

        <div className="absolute top-[720px] left-[379px] flex gap-3">
      
          <a href="#artworks" className="w-[228px] h-[48px] px-[61px] py-[12px] bg-[#02272F] flex justify-between text-white rounded-tl-[6px]">
            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716893931/filter_hdr_ja4jfq.svg" alt="filter" />
            Artworks
            </a>
          <a href="#about" className="w-[227px] h-[48px] px-[61px] py-[12px] bg-white flex rounded-none text-orange-600 border border-orange-600 gap-3">
            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894332/profilee_qy0rxm.svg" alt="about" />
            About
            </a>
          <a href="#moodboard" className="w-[227px] h-[48px] px-[61px] py-[12px] bg-white flex rounded-none text-orange-600 border border-orange-600 gap-3">
             <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894446/folder_eeotfy.svg" alt="moodboard" />
            Moodboard
            </a>
          <a href="#store" className="w-[227px] h-[48px] px-[61px] py-[12px] bg-white flex rounded-none text-orange-600 border border-orange-600 gap-3">
            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894788/store_j0eefa.svg" alt="store" />
            Store
            </a>
      
         
        </div>
  
  
    
      </header>
          <hr  className='w-[1728px] bg-orange-400  border-orange-400 mb-12'/>


      {/* <Main />
      <Footer /> */}

      <Profilemain />
      <Loadmore />
    </div>
  );
}

export default Profile;