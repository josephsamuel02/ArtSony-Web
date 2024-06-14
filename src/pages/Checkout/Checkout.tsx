import Nav from "../../components/Nav";

function Checkout() {
    const items = [
        { title: "Soul Mountain", rights: "Exclusive Rights", price: 200, image:"https://res.cloudinary.com/dspkk9qlz/image/upload/v1718118210/Group_1339_ol2ukf.svg", botton1:"+", botton2:"-"},
        { title: "Crimson Sky", rights: "Exclusive Rights", price: 1000 , image:"https://res.cloudinary.com/dspkk9qlz/image/upload/v1718121792/Rectangle_174_q6mssw.svg", botton1:"+", botton2:"-" },
        { title: "Glassified", rights: "Exclusive Rights", price: 500 , image:"https://res.cloudinary.com/dspkk9qlz/image/upload/v1718122076/Group_1695_s1ykp7.svg" , botton1:"+", botton2:"-" }
    ];

    const details = [
        { id: 1, imageUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718245464/Rectangle_7_hcw1fb.svg", artname:"Fussion", avatarUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718275823/Ellipse_10_x2eyae.svg", name: "Arlene McCoy", price: "$ 1,000" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278552/Rectangle_7_1_lpxtgu.svg", artname:"Metal Wave",  avatarUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278730/Ellipse_10_1_mkytlw.svg", name: "Eleanor Pena", price: "$ 600" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278888/Rectangle_7_2_y97mpx.svg", artname:"Food Chain",  avatarUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278809/Ellipse_10_2_lqlnew.svg", name: "Darrell Steward", price: "$ 1000" },
        { id: 4, imageUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278888/Rectangle_7_2_y97mpx.svg", artname:"Pet Dog",  avatarUrl: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718279032/Group_32_xh4auo.svg", name: "Ronald Richards", price: "$ 500" }
    ];


  


    return (
        <div className="w-full  flex flex-col">
            <Nav />

   

           

                       
             
         


            <div className="flex flex-row  mx-auto justify-between gap-24 mt-24">
         

         {/* ------------cards----------- */}
         <div className="flex flex-col items-start justify-start mx-auto w-[722px] gap-6 h-[1300px] mb-9">

               <h1 className=" text-3xl font-[400]">Cart & Checkout</h1>
           

             {items.map((item,index)=>(
            <div key={index} className="flex gap-6 h-[192px] w-[722px] rounded-[10px] border border-[#f5dcdc]">
           <img src={item.image} alt="bgone" />
                     <div className="flex justify-between items-center gap-6 w-[495px] pt-3 ">
                         <div className="flex flex-col gap-5 h-[192px]">
                             <p className="text-[#8AC5C7] font-[400]">{item.title}</p>
                             <p className="text-[#8F8F8F]">{item.rights}</p>
                             <div className="flex flex-row gap-3">
                                 <p className="text-[#8F8F8F] w-[104px] h-[20px] text-sm font-[400]">Physical artwork</p>
                                 <img className="w-[17px] h-[17px]" src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718118918/help_x9fybk.svg" alt="question" />
                             </div>
                             <div className="flex flex-row gap-4 items-center w-[144px]">
                                 <button className="bg-[#f8eae7] w-[48px] h-[48px] text-[#F25B38] rounded-[10px] border border-[#D9D9D9]">{item.botton1}</button>
                                 <p>1</p>
                                 <button className="bg-[#f8eae7] w-[48px] h-[48px] text-[#F25B38] rounded-[10px] border border-[#D9D9D9]">{item.botton2}</button>
                             </div>
                         </div>
                         <div className="flex flex-col justify-between h-[175px] items-center">
                             <img className="w-[19.21px] h-[19.21px]" src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718120486/delete_iwoglq.svg" alt="delete" />
                             <h3 className="pr-6">USD <span className="text-[#F25B38]">$ {item.price}</span></h3>
                         </div>
                     
                     
                     </div>

     </div>
   ))}
   
           
          

          

        <h2 className=" justify-start items-start w-[378px] h-[78px] ">Summary</h2>

             <div className="flex flex-col w-[722px] h-[272px]  border border-[#D9D9D9] gap-9 justify-center">
                 <div className="flex flex-col">
                     <div className="flex flex-row justify-between pt-5 pl-6">
                         <div className="gap-5 flex text-[#8F8F8F]"><p>Soul Mountain</p> <p>x1</p>  </div>

                         <h3 className="pr-6">USD <span className="text-[#F25B38]">$ 200</span></h3>

                     </div>

                     <div className="flex flex-row justify-between pt-5  pl-6">
                      <div className="gap-5 flex text-[#8F8F8F]"><p>Crimson Sky</p> <p>x2</p>  </div>

                         <h3 className="pr-6">USD <span className="text-[#F25B38]">$ 2000</span></h3>

                     </div>


                     <div className="flex flex-row justify-between pt-5  pl-6">
                      <div className="gap-5 flex text-[#8F8F8F]"><p>Glassified</p> <p>x1</p>  </div>

                         <h3 className="pr-6">USD <span className="text-[#F25B38]">$ 1000</span></h3>

                     </div>


                    
                 </div>
                 <img className="w-[666px] pl-4" src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718124070/Line_34_kalpt4.svg" alt="" />
                 <div className="flex h-[40px] flex-row justify-between   pl-6  items-center">

                     <h1 className="pb-4 text-2xl">Total</h1>
                     <h3 className="pr-6 pb-4 text-2xl">USD <span className="text-[#F25B38]">$ 1000</span></h3>
                    
                 </div>
             </div>
           

         

          

           
         </div>

       {/* --------------vertical line--------------- */}
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718214989/Line_23_nllljz.svg" alt="vertical line"  className="h-[1111px] mt-12"/>


   {/* -----------------payment card-------------- */}
         <div className="flex flex-col gap-9 w-[551px]  items-start mx-auto pt-14">



      <div className="relative w-[552px] h-[288px] bg-cover bg-center "style={{ backgroundImage: 'url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1718217116/Rectangle_175_laxlo3.svg)' }}>


            <div className="flex flex-col">
              

            <div className="absolute top-0 left-0 w-full flex justify-between p-5  mt-3">
                <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718219594/Chip_Image_cqwcbx.svg" alt="Image 1" className="h-[48px] w-[48px] object-cover" />
              
              <div className="text-white">
                 <p className="text-[22.15px] font-[400]">Bank name</p>
                 <p className="text-[18.46px] font-Raleway font-[600]">Owner name</p>
              </div>
               </div>  


                 <div className="flex justify-between  p-5 mt-52">

                <div className="flex justify-between items-center gap-3">

                <p className="text-[22.15px] font-[400] text-white">****</p>

                <p className="text-[22.15px] font-[400] text-white">****</p>

                <p className="text-[22.15px] font-[400] text-white"> 0817</p>

                </div>

                 <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718221239/Credit_Card_Logo_jkmusl.svg"  alt="master card" className="object-cover" />

                 </div>
             
             </div>  
            
       
      </div>


       <div className="flex justify-between w-full">

         <div className="flex justify-between gap-4">
         <p className="w-[129px] h-[24px] font-[400]">Payment method</p>
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718221815/credit_card_r8wxy8.svg" alt="cardicon" />

         </div>

         <a href="#edit" className="text-[#F25B38]"> Edit</a>

       </div>

       <p>Others</p>

       <div className="flex w-full justify-between">
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224418/Frame_87_yidurr.svg" alt="master cards" />
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224451/Frame_90_kqqr1s.svg" alt="apple pay" />
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224470/Frame_88_nvnie8.svg" alt="paypal" />
         <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224497/Frame_89_f7s6pv.svg" alt="visa card" />
       </div>


       <div className="flex justify-between w-full">

           <div className="flex w-[86.25px] gap-2 h-[22px]">

             <p className="w-[129px] h-[24px]">Address</p>
            <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718223081/pin_drop_w9crrr.svg" alt="location" />

            </div>


          <a href="#edit" className="text-[#F25B38]"> Edit</a>

        </div>


        <p className="font-Poppins font-[300]" >4517 Washington Ave. Manchester, Kentucky <br />39495</p>

        <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224787/Line_33_dpdj1v.svg" alt="line demacate" className="" />

               
               
               <div className="flex justify-between w-full">
                 
                 <div className="flex justify-between w-full">

                  <div className="flex justify-between gap-6">
               <p className="w-[129px] h-[24px] font-[400]">Shipping</p>
               <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718225374/help_1_d7ncn4.svg" alt="cardicon" />

                   </div>

                    <p  className="text-[#F25B38]"> $70</p>

                    </div>

               </div>



                   <div className="flex justify-between w-full">

                     <p className="w-[129px] h-[24px]">Cart total</p>


                     <p  className="text-[#F25B38]">$ 11,000</p>

                    </div>       


                    <div className="flex justify-between w-full">

                         <p className="w-[129px] h-[24px] font-[500] text-xl">Total</p>
                         <p  className="text-[#F25B38]">$ 11,070</p>

                   </div>     


                     




         

             



      

          <a href="#email" className="text-white text-center pt-6 bg-[#F25B38] w-[560px] h-[72px]   mt-6 hover:bg-orange-800 font-[400]">Checkout</a>


          </div>


         
     
            
            
            
            
            
            
            
            </div>


            

            
            
            
         
           

        
            
           
          

          <img  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718214827/Line_34_1_avnobz.svg" alt="linetm"  />


          
          <div className="flex flex-col h-[561px] mx-auto justify-center gap-6">

            <h1 className="font-[400] text-[40px] ml-[33px]">Artworks you may like </h1>

            <div className="flex flex-row h-[288px] justify-around w-[1680px]">
        {details.map((detail) => (
            <div key={detail.id} className="flex flex-col w-[351px] h-[288px] border border-orange-600 rounded-[10px]">
                <div className="flex justify-between p-2 relative object-cover w-[351px] h-[216px]" style={{backgroundImage: `url(${detail.imageUrl})`}}>
                    <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718269585/shopping_cart_vxqsls.svg" alt="Image 1" className="h-[48px] w-[48px] absolute left-3 top-4" />
                    <p className="text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 font-[400]">{detail.artname}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 mt-3 ml-3">
                        <img src={detail.avatarUrl} alt="" />
                        <p>{detail.name}</p>
                    </div>
                    <div className="flex items-center gap-6 mt-3 mr-5 justify-between">
                        <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718276229/Group_1818_hipuuo.svg" alt="" />
                        <p className="text-[#F25B38]">{detail.price}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
         


    <div className="mt-12 flex item-center justify-center w-full gap-6 ml-2">
            <img className="w-[47.86px] h-[47.86px]" src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894980/loadmorei_zc92qi.svg" alt="" />

            <button className="text-[#F25B38] text-[24px]">See more Art ?</button>

        </div>


          
          
          
          </div>
        
        </div>
    );
}

export default Checkout;
