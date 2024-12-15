/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { clearAuthData, LoginUser } from "../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";
import { clearUserData } from "../../Redux/User";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const LogInStatus = useSelector((state: any) => state.Auth.auth?.status);
  const userId = useSelector((state: any) => state.User.my_profile.data?.userId);

  const [loading, setLoading] = useState(LogInStatus);
  const [loginData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });

  const LoginAction = async (e: MouseEvent) => {
    e.preventDefault();
    localStorage.setItem("artsoney_user_id", userId);
    try {
      await dispatch(LoginUser(loginData));
      setLoading(true);

      if (LogInStatus === 200) {
        setLoading(false);
        window.location.assign;
        Navigate(PUBLIC_ROUTES.HOME);
      }
    } catch (error) {
      console.log(`${error}, unable to login`);
    }
  };

  useEffect(() => {
    localStorage.removeItem("artsoney_user_id");
    dispatch(clearUserData());
    dispatch(clearAuthData());
    localStorage.removeItem("ASY_A_Token");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659025/552fe2dc96c0c5502efc7291525a99e9_qzcemj.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center">
      <Nav />
      <div className="w-[380px] h-auto mt-20 py-8 bg-[rgba(22,22,53,0.5)]  bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl flex flex-col justify-center items-center px-6  ">
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
            onChange={(e) =>
              setLoginData((prev: object) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData((prev: object) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            onClick={(e: any) => LoginAction(e)}
            className="w-[300px] mt-3 p-3 font-Poppins text-[10px] font-light  text-xs   bg-[#F25b38] backdrop-filter backdrop-blur-md text-white border-none cursor-pointer rounded-lg"
          >
            Login
          </button>
          <div className="flex flex-row py-6 text-white items-center w-full  ">
            <div className="w-full flex flex-row items-center justify-items-center">
              <h3 className="mr-auto w-auto flex flex-row items-center ">
                <input
                  type="checkbox"
                  className="m-0 h-[11px] accent-[#f25b38] bg-[#f25b38] mr-1"
                />
                <p className=" font-Poppins text-[10px] font-light text-white   ">
                  Remember me
                </p>
              </h3>

              <p className="ml-auto flex font-Poppins text-[10px] font-light text-white   mt-1   text-wrap  text-right ">
                Forgotten Password?
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
          <a href={PUBLIC_ROUTES.SIGNUP} className="px-2 text-[#f76a32] font-bold">
            Signup
          </a>
          for free.
        </span>
      </div>
      <div className="mx-auto w-10/12 h-[40px] mb-3 bg-[rgba(43,43,103,0.5)] bg-opacity-60 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
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
      {loading == "loading" && <Loading />}
    </div>
  );
};

export default Login;
