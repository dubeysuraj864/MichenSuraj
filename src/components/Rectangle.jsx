import { useState } from "react";
import RectangleImage1 from "../images/recImage1.png";
import RectangleImage2 from "../images/recImage2.png";
import RectangleImage3 from "../images/recImage3.png";

function Rectangle() {
  const [text] = useState({
    // ------card1
    card1Text1: " Suggest meal on a daily basis",
    card1Text2: " 100% personalised",
    card1Text3: "You can always ask for menu change",
    // ------card2
    card2Text1: " Order grocery on your behalf",
    card2Text2: " 0% wastage",
    card2Text3: "Take care of your brand preference",
    // -------card3
    card3Text1: "Communicate with your cook to execute your meal",
    card3Text2: "100% execution",
    card3Text3: "Help your cook to learn new dishes",
  });

  return (
    <div>
        <div className="">
 

 <div className="card px-4" data-aos="zoom-in-down"  data-aos-duration="1000">
   <div className="rec bg-[#FFFFFF] flex  justify-between sm:items-center rounded-tr-3xl rounded-bl-3xl p-4 drop-shadow-md  sm:w-4/6  m-auto   my-8">
     <div className="sm:w-full sm:p-2">
       <div className="title font-bold my-1 text-lg sm:text-3xl sm:mb-4">
         {text.card1Text1}
       </div>
       <div className="info font-semibold text-md sm:my-3 sm:text-lg">
         {text.card1Text2}
       </div>
       <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
         What more
       </div>
       <div className="info font-semibold text-md sm:text-lg">
         {text.card1Text3}
       </div>
     </div>
     <div>
       <img src={RectangleImage1} className="w-16 sm:w-28 p-2" alt="" />
     </div>
   </div>
 </div>

 {/* --------------------------- */}

 <div className="card px-4" data-aos="zoom-in-down"  data-aos-duration="1000">
   <div className="rec bg-[#FFFFFF] flex  justify-between sm:items-center rounded-tr-3xl rounded-bl-3xl p-4 drop-shadow-md  sm:w-4/6 m-auto  my-8">
     <div className="sm:w-full sm:p-2">
       <div className="title font-bold my-1 text-lg sm:text-3xl sm:mb-4">
         {text.card2Text1}
       </div>
       <div className="info font-semibold text-md sm:my-3 sm:text-lg">
         {text.card2Text2}
       </div>
       <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
         What more
       </div>
       <div className="info font-semibold text-md sm:text-lg">
         {text.card2Text3}
       </div>
     </div>
     <div>
       <img src={RectangleImage2} className="w-[100px] sm:w-32 p-2" alt="" />
     </div>
   </div>
 </div>

 {/* --------------------------- */}
 <div className="card px-4" data-aos="zoom-in-down"   data-aos-duration="1000">
   <div className="rec bg-[#FFFFFF] flex  justify-between sm:items-center rounded-tr-3xl rounded-bl-3xl p-4 drop-shadow-md  sm:w-4/6 m-auto  my-8">
     <div className="sm:w-4/5 sm:p-2">
       <div className="title font-bold my-1 text-lg sm:text-3xl sm:mb-4">
         {text.card3Text1}
       </div>
       <div className="info font-semibold text-md sm:my-3 sm:text-lg">
         {text.card3Text2}
       </div>
       <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
         What more
       </div>
       <div className="info font-semibold text-md sm:text-lg">
         {text.card3Text3}
       </div>
     </div>
     <div>
       <img src={RectangleImage3} className="w-18 sm:w-28 p-2" alt="" />
     </div>
   </div>
 </div>
</div>
    </div>
  );
}

export default Rectangle;
