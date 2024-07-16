function Congratulations() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full flex flex-row items-center backdrop-blur-sm bg-[#221e1d56]">
      <div className="flex flex-col px-6 w-[398px] h-[504px] bg-white border border-[#f25a3891] rounded-md items-center mx-auto">
        <h1 className=" h-[72px] text-xl text-[#8AC5C7] mt-10">Congratulations</h1>

        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718111198/In_no_time-amico_1_1_wc0vd1.svg"
          alt="congratulation"
        />

        <p className="mt-2 text-[#8AC5C7]">Purchase Successful</p>

        <div className="h-auto py-10 will-change-auto">
          <p>
            Confirmation email has been sent to
            <span className="text-[#F25B38] pl-1">kenzi.lawson@example.com</span>. You can view
            order info and monitor progress in
            <span className="text-[#F25B38] pl-1">Orders.</span>
          </p>
        </div>

        <p className="my-1"> Thank you from Artsony</p>

        <a
          href="#email"
          className="text-white text-center pt-6 bg-[#F25B38] w-11/12 h-[62px] rounded  mt-6 hover:bg-orange-800"
        >
          Back to Cart
        </a>
      </div>
    </div>
  );
}

export default Congratulations;
