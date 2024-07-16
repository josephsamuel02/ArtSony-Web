function Processing() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full flex flex-row items-center backdrop-blur-sm bg-[#221e1d56]">
      <div className="flex  w-[398px] h-[504px] bg-white border border-[#f25a3891] rounded-md items-center mx-auto">
        <div className="flex flex-col w-[264px] h-[442px] items-center mx-auto gap-4">
          <h1 className=" h-[72px] text-4xl not-italic">Processing</h1>

          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718110160/Group_1730_wiasdd.svg"
            alt="logo"
          />

          <p className="mt-4"> Please wait a moment</p>
        </div>
      </div>
    </div>
  );
}

export default Processing;
