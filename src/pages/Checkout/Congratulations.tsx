

function Congratulations() {
    return (
        <div className="flex items-center justify-center mt-12 w-full mx-auto">

        <div className="flex flex-col gap-4 w-[598px] h-[744px] border border-[#F25B38] rounded-[10px] items-center mx-auto">
            
            

            <h1 className=" h-[72px] text-xl text-[#8AC5C7] mt-10">Congratulations</h1>

            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718111198/In_no_time-amico_1_1_wc0vd1.svg" alt="congratulation" />

            <p className="mt-2 text-[#8AC5C7]">Purchase Successful</p>

            <p className="w-[413px] h-[28px]">Confirmation email has been,<a href="#email" className="text-[#F25B38]">kenzi.lawson@example.com</a>, you can view order info and monitor progress in <a href="#order" className="text-[#F25B38]">Orders.</a></p>

            <p className="mt-7"> Thank you from Artsony</p>

            <a href="#email" className="text-white text-center pt-6 bg-[#F25B38] w-[500px] h-[72px]  mt-6 hover:bg-orange-800">Back to Cart</a>

         
            
       
            
        </div>

        </div>
       
     
    );
  }
  
  export default Congratulations;