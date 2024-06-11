

function Signup() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657921/52f815ef99b62d1351fcc7c3db448e8b_ucxlyz.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center ">
      <div className="w-[380px] h-[420px] bg-[rgba(43,43,103,0.5)]  bg-opacity-60 backdrop-filter backdrop-blur-md rounded-xl flex flex-col justify-center items-center px-6  ">
      <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
          className="w-[150px] h-[40px] mt-5 "
          alt=""
        />
        <form
          className="flex flex-col gap-3 items-center justify-center "
          action=""
        >
          <input
            className="p-0.5 w-[300px] bg-transparent border-b border-white outline-none focus:outline-none text-white underline-offset-1 "
            type="text"
            placeholder="Username"
          />
          <input
            className="p-0.5 w-[300px] bg-transparent  border-b border-white outline-none focus:outline-none "
            type="email"
            placeholder="Email"
          />
          <input
            className="p-0.5 w-[300px] bg-transparent  border-b border-white outline-none focus:outline-none"
            type="password"
            placeholder="Password"
          />

          <button className="w-[300px] mt-3 p-3 bg-[#F25b38] text-white border-none cursor-pointer rounded-lg">
            Create Account
          </button>
          <span className="text-center text-white text-xs mt-1 space-x-1 w-[290px] ">
            By creating account, you hereby agree to Artsony's Terms and service
            and acknowledge you've read our Privacy Policy
          </span>
          <span className="text-center text-white text-xs mt-1">
          Or sign up with
        </span>
        </form>

        
        <div className="flex flex-row items-center justify-center gap-2 mt-2 ">
        <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png" alt="" className='w-5 h-5 object-cover rounded-full bg-white ' />
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/facebook_f_qzf7wk.png" alt="" className='w-5 h-5 object-cover rounded-full bg-white'/>
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/apple_vk0a9c.png" alt="" className='w-5 h-5 object-cover rounded-full bg-white'/>
        </div>
        <span className="text-center text-white text-xs mt-1.5">
          Already have an Account? <span className='text-[#8ac5c7]'>Sign in</span>
        </span>
      </div>

      <div className="mx-auto w-[1200px] h-[40px] bg-[rgba(43,43,103,0.5)] bg-opacity-60 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
        <div className="flex flex-row items-center justify-between p-2 text-white">
          <div className='flex flex-row justify-center items-center gap-3'>
          <div><img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794458/Ellipse_10_zuglmt.png" alt="" className='w-7 h-7'/></div>
            <div>Grace Bamidele</div>
          </div>
          <div className='flex flex-row justify-center items-center gap-3'>
            <div>Privacy</div>
            <div>Terms & Condition</div>
            <div>FAQ</div>
            <div>About</div>
            <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657862/translate_cvxixm.png"  className='w-6 h-6 rounded-full' alt="" />
            <div>Language</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup