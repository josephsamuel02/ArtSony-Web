import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col ">
      <img
        src="./images/error-page-svgrepo-com.svg"
        className="mx-auto mt-20  w-52 h-52 "
        alt="404page"
      />
      <h1 className="text-5xl font-bold text-center mt-4 text-slate-700 ">
        We can't seem to find the page <br />
        you are looking for
      </h1>
      <Link to="/" className="mx-auto"><button className=" mx-auto my-10 py-6 px-16 text-lg text-green-700 bg-white hover:bg-green-700 border-2 border-green-700 hover:text-white rounded-full">
        Go back Home
      </button></Link>
    </div>
  );
};

export default Page404;
