const ForgottenPassword = () => {
  return (
    <div>
      <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716658008/e9fe678e1e7d7ec4bf9b8c82af3e8c0d_x0qu3f.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center ">
        <div className="w-[380px] h-[420px] bg-[rgba(43,43,103,0.5)] bg-opacity-0 backdrop-filter backdrop-blur-md rounded-xl flex flex-col justify-center items-center px-6  ">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
            className="w-[150px] h-[40px] mb-10 "
            alt=""
          />
          <form
            className="flex flex-col gap-3 items-center justify-center "
            action=""
          >
            <div className="flex flex-row gap-4">
              <div className="w-3 h-2 bg-[#F25B38] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EAEAEA] rounded-full"></div>
            </div>

            <label className="p-0.5 w-[300px] text-white " htmlFor="">
              Forgotten Password
            </label>
            <input
              className="p-0.5 w-[300px] bg-transparent border-b border-[#ffffff] text-white outline-none focus:outline-none"
              type="email"
              placeholder="Enter email address"
            />

            <button className="w-[300px] mt-3 p-3 bg-[#F25b38] text-white border-none cursor-pointer rounded-lg">
              Reset Password
            </button>

            <span className="text-center text-white text-xs mt-1">
              Back to sign in ?
            </span>
          </form>
        </div>

        <div className="mx-auto w-[1200px] h-[40px] bg-[rgba(43,43,103,0.5)] bg-opacity-0 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
          <div className="flex flex-row items-center justify-between p-2 text-white">
            <div className="flex flex-row justify-center items-center gap-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794458/Ellipse_10_zuglmt.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
              <div>Grace Bamidele</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
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
    </div>
  );
};

export default ForgottenPassword;
