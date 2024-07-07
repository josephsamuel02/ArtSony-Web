import React from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Login: React.FC = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659025/552fe2dc96c0c5502efc7291525a99e9_qzcemj.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[380px] h-auto py-8 bg-[rgba(22,22,53,0.5)]  bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl flex flex-col justify-center items-center px-6  ">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
          className="w-[150px] h-[40px] mb-10"
          alt="Logo"
        />
        <form className="flex flex-col gap-3 items-center justify-center" action="">
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="email"
            placeholder="Email"
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="Password"
          />
          <button className="w-[300px] mt-3 p-3 font-Poppins text-[10px] font-light  text-xs   bg-[#F25b38] backdrop-filter backdrop-blur-md text-white border-none cursor-pointer rounded-lg">
            Login
          </button>
          <div className="flex flex-row py-6 text-white items-center w-full  ">
            <div className="flex flex-row items-center">
              <input type="checkbox" className="rounded-full bg-[#f25b38] mr-1" />
              <p className="text-sm font-Poppins text-[10px] font-light text-white  mt-1">
                Remember me
              </p>
              <p className="text-sm font-Poppins text-[10px] font-light text-white   mt-1 mx-auto text-wrap pl-16 text-right ">
                Forgetten Password?
              </p>
            </div>
          </div>
          <span className="text-center  text-white   font-Poppins text-[12px]  mt-1">
            Or
            <span className="px-1 text-[#f76a32] font-bold">signup</span>
            with
          </span>
        </form>
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png"
            alt="Google"
            className="w-5 h-5 object-cover rounded-full bg-white"
          />
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/facebook_f_qzf7wk.png"
            alt="Facebook"
            className="w-5 h-5 object-cover rounded-full bg-white"
          />
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/apple_vk0a9c.png"
            alt="Apple"
            className="w-5 h-5 object-cover rounded-full bg-white"
          />
        </div>
        <span className="text-center py-3 font-Poppins text-[12px] font-light text-white text-xs mt-1.5">
          Don't have an Account?
          <a href={PUBLIC_ROUTES.LOGIN} className="px-2 text-[#f76a32] font-bold">
            Signup
          </a>
          for free.
        </span>
      </div>
      <div className="mx-auto w-[1200px] h-[40px] mb-3 bg-[rgba(43,43,103,0.5)] bg-opacity-60 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
        <div className="px-6 flex flex-row items-center justify-between p-2 text-white">
          <div className=" flex flex-row justify-center items-center gap-3">
            <img
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794458/Ellipse_10_zuglmt.png"
              alt=""
              className="w-7 h-7"
            />

            <p className=" font-light  font-Poppins outline-none text-sm">Grace Bamidele</p>
          </div>
          <div className="flex flex-row  font-light  font-Poppins  text-xs justify-center items-center gap-3">
            <div>Privacy</div>
            <div>Terms & Condition</div>
            <div>FAQ</div>
            <div>About</div>
            <img
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657862/translate_cvxixm.png"
              className="w-6 h-6 rounded-full"
              alt=""
            />
            <div>Language</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
