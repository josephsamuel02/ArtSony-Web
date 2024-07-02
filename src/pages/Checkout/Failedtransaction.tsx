

function Failedtransaction() {
    return (
        <div className="flex items-center justify-center mt-12 w-full mx-auto">

        <div className="flex flex-col gap-4 w-[598px] h-[744px] border border-[#F25B38] rounded-[10px] items-center mx-auto">
            
            

            <h1 className=" h-[72px] text-xl text-[#F25B38] mt-10">Failed Transaction</h1>

            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718112325/Group_2183_lnipfb.svg" alt="failed transaction" />


            <a href="#email" className="text-[#F25B38] mt-12">Retry</a>


            <a href="#email" className="text-white text-center pt-6 bg-[#F25B38] w-[500px] h-[72px] mt-12  hover:bg-orange-800">Back to Cart</a>

         
            
       
            
        </div>

        </div>
       
     
    );
  }
  
  export default Failedtransaction;