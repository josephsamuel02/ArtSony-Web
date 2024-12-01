/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useState } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { UserSignup } from "../../Redux/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import Nav from "../../components/NavBar/Nav";

function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const LogInResponse = useSelector((state: any) => state.Auth.user.status);
  const status = useSelector((state: any) => state.Auth.status);

  const [loading, setLoading] = useState(status);
  const [signupData, setSignupData] = useState<object>({
    user_name: "",
    email: "",
    password: "",
  });

  const SignupAction = (e: MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("artsoney_user_id");
    dispatch(UserSignup(signupData));
    setLoading(true);

    setTimeout(() => {
      if (LogInResponse === 200) {
        setLoading(false);
        window.location.assign;
        Navigate(PUBLIC_ROUTES.HOME);
      }
    }, 1000);
  };
  return (
    <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657921/52f815ef99b62d1351fcc7c3db448e8b_ucxlyz.png)] bg-cover bg-no-repeat bg-center h-screen  w-screen flex flex-col items-center justify-center ">
      <Nav />
      <div className="w-[380px] h-auto mt-20 bg-[rgba(22,22,53,0.5)]  bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl flex flex-col justify-center items-center px-6  ">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
          className="w-[150px] h-[40px] my-5 "
          alt=""
        />
        <form className="flex flex-col gap-3 items-center justify-center " action="">
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, user_name: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, password: e.target.value }))
            }
          />

          <button
            onClick={(e) => SignupAction(e)}
            className="w-[300px] mt-3 p-3 bg-[#F25b38] hover:bg-[#f3512c] text-white font-light font-Raleway border-none cursor-pointer rounded-lg"
          >
            Create Account
          </button>
          <span className="text-center font-Poppins text-[10px] font-light text-white text-xs mt-1 space-x-1 w-[290px] ">
            By creating account, you hereby agree to Artsony's Terms and service and
            acknowledge you've read our Privacy Policy
          </span>
          <span className="text-center  text-white   font-Poppins text-[12px]  mt-1">
            Or
            <span className="px-1 text-[#f76a32] font-bold">signup</span>
            with
          </span>
        </form>

        <div className="flex flex-row items-center justify-center gap-4 mt-2 ">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png"
            alt=""
            className=" mx-auto w-6 h-6 object-cover rounded-full bg-white "
          />
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/facebook_f_qzf7wk.png"
            alt=""
            className=" mx-auto w-6 h-6 object-cover rounded-full bg-white "
          />
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/apple_vk0a9c.png"
            alt=""
            className=" mx-auto w-6 h-6 object-cover rounded-full bg-white "
          />
        </div>
        <span className="text-center py-5 font-Poppins text-[12px] font-light text-white text-xs mt-1.5">
          Already have an Account?
          <a href={PUBLIC_ROUTES.LOGIN} className="px-2 text-[#f76a32] font-bold">
            Login
          </a>
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
}

export default Signup;
