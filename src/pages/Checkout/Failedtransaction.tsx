function Failedtransaction() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full flex flex-row items-center backdrop-blur-sm bg-[#221e1d56]">
      <div className="flex flex-col px-6 w-[398px] h-[504px] bg-white border border-[#f25a3891] rounded-md items-center mx-auto">
        <h1 className=" h-[72px] text-xl text-[#F25B38] mt-10">Failed Transaction</h1>

        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718112325/Group_2183_lnipfb.svg"
          alt="failed transaction"
        />

        <a href="#email" className="text-[#F25B38] mt-12">
          Retry
        </a>

        <a
          href="#email"
          className="text-white text-center pt-5 bg-[#F25B38] w-11/12 h-[62px] mt-12 rounded  hover:bg-[#c55137] "
        >
          Back to Cart
        </a>
      </div>
    </div>
  );
}

export default Failedtransaction;
