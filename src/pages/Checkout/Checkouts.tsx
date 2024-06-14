import Nav from "../../components/Nav";
import 'react-dropdown/style.css';
import DropdownOptions from "./DropdownOptions";

function Checkouts() {
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


      const options1 = ['Kenturky', 'two', 'three'];
      const options2 = ['USA', 'five', 'six'];







  


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


 

<div className="flex flex-col gap-9 w-[551px] items-start mx-auto">

<div className="flex flex-col justify-between w-full gap-4 mt-12  ">

  <div className="flex w-[86.25px] gap-2 h-[22px]">
    <p className="w-[129px] h-[24px]">Address</p>
    <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718373220/pin_drop_1_dhx34a.svg" alt="location" />
  </div>

  <div className="flex items-center justify-center w-[553.15px] h-[66.6px] border border-orange-600">
    <input type="text" placeholder="addresss" className="w-[500px] h-full border border-none outline-none font-[400] text-[18.5px]" />
  </div>

  <div className="flex items-center justify-center w-[553.15px] h-[66.6px] border border-orange-600">
    <input type="text" placeholder="addresss" className="w-[500px] h-full border border-none outline-none font-[400] text-[18.5px]" />
  </div>

        <DropdownOptions className="checkout-dropdown w-[324.68px] h-[66.6px] border border-orange-600  pl-4 text-[18px] font-[400] outline-none" options={options1} placeholder={"Select State"} />
        <DropdownOptions className="checkout-dropdown w-[553.15px] h-[66.6px] border border-orange-600 text-[18px] font-[400] pl-4 outline-none" options={options2} placeholder={"select country"} />
</div>


{/* ---------------------card payment---------- */}



<hr className="bg-[#8fdcde] w-[554px]" />
<div className="flex justify-between w-full">
  <div className="flex justify-between w-full">
    <div className="flex justify-between gap-6">
      <p className="w-[129px] h-[24px] font-[400]">Shipping</p>
      <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718225374/help_1_d7ncn4.svg" alt="cardicon" />
    </div>
    <p className="text-[#F25B38]">$70</p>
  </div>
</div>



<div className="flex justify-between w-full">
  <p className="w-[129px] h-[24px]">Cart total</p>
  <p className="text-[#F25B38]">$ 11,000</p>
</div>

<div className="flex justify-between w-full">
  <p className="w-[129px] h-[24px] font-[500] text-xl">Total</p>
  <p className="text-[#F25B38]">$ 11,070</p>
</div>

<hr className="bg-[#8fdcde] w-[554px]" />

{/* 
---------cards payment options--------- */}
<div className="flex w-full justify-between">
  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224418/Frame_87_yidurr.svg" alt="master cards" />
  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224451/Frame_90_kqqr1s.svg" alt="apple pay" />
  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224470/Frame_88_nvnie8.svg" alt="paypal" />
  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224497/Frame_89_f7s6pv.svg" alt="visa card" />
</div>



{/* -----------card info--------- */}
<div className="flex justify-between w-full">

<p className="w-[129px] h-[24px]">Card info</p>

<div className="flex flex-row justify-between gap-3">

<p  className="">Mastarcard</p>

  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718364511/Credit_Card_Logo_1_n7ywml.svg" alt="mastercard" />

</div>


</div>   

<div className="flex items-center justify-center w-[553.15px] h-[66.6px] border border-orange-600">
    <input type="text" placeholder="Holders name" className="w-[500px] h-full border border-none outline-none font-[400] text-[18.5px]" />
  </div>

  <div className="flex items-center justify-center w-[553.15px] h-[66.6px] border border-orange-600">
    <input type="text" placeholder="Card No:" className="w-[500px] h-full border border-none outline-none font-[400] text-[18.5px]" />
  </div>


<div className="flex flex-row justify-between  w-[553.15px]">

<div className="flex  pl-6 w-[242.15px] h-[66.6px] border border-orange-600 ">
    <input type="text" placeholder="CVV" className="w-[242px] h-full border border-none outline-none font-[400] text-[18.5px]" /> 
  </div>

  <div className="flex pl-6 w-[242.15px] h-[66.6px] border border-orange-600">
        <input 
            type="text" 
            placeholder="dd/mm/yyyy" 
            className="w-full h-full border-none outline-none font-medium text-lg" 
        
        />
    </div>

</div>
 



<a href="#email" className="text-white text-center pt-6 bg-[#F25B38] w-[560px] h-[72px] mt-6 hover:bg-orange-800 font-[400]">Checkout</a>

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

export default Checkouts;
