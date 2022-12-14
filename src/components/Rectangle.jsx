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
        
      <div
          className="card px-4 my-10 sm:w-5/6 m-auto"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <div className="rec bg-[#FFFFFF]  p-4 rounded-tr-3xl rounded-bl-3xl drop-shadow-md m-auto ">
            <div className=" sm:px-2 flex  justify-between items-center sm:max-w-xl">
              <div className="">
                <div className="title font-bold my-1 text-lg sm:text-2xl">
                  {text.card1Text1}
                </div>
                <div className="info font-semibold text-md sm:my-3 sm:text-lg">
                  {text.card1Text2}
                </div>
                <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
                  What more
                </div>
              </div>
              <div>
                <img
                  src={RectangleImage1}
                  className="w-14 sm:w-30 "
                  alt=""
                />
              </div>
            </div>
            <div className="info font-semibold text-md sm:text-lg text-left sm:px-2">
              {text.card1Text3}
            </div>
          </div>
        </div>

        {/* --------------------------- */}

        <div
          className="card px-4 my-10 sm:w-5/6 m-auto"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <div className="rec bg-[#FFFFFF]  p-4 rounded-tr-3xl rounded-bl-3xl drop-shadow-md m-auto ">
            <div className=" sm:px-2 flex  justify-between items-center sm:max-w-xl">
              <div className="">
                <div className="title font-bold my-1 text-lg sm:text-2xl">
                  {text.card2Text1}
                </div>
                <div className="info font-semibold text-md sm:my-3 sm:text-lg">
                  {text.card2Text2}
                </div>
                <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
                  What more
                </div>
              </div>
              <div>
                <img
                  src={RectangleImage2}
                  width={80}
                  className="w-18  sm:w-38"
                  alt=""
                />
              </div>
            </div>
            <div className="info font-semibold text-md sm:text-lg text-left sm:px-2">
              {text.card2Text3}
            </div>
          </div>
        </div>

        {/* --------------------------- */}
        <div
          className="card px-4 my-10 sm:w-5/6 m-auto"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <div className="rec bg-[#FFFFFF]  p-4 rounded-tr-3xl rounded-bl-3xl drop-shadow-md m-auto ">
            <div className=" sm:px-2 flex  justify-between  sm:max-w-xl">
              <div className="">
                <div className="title font-bold my-1 text-lg sm:text-2xl">
                  {text.card3Text1}
                </div>
                <div className="info font-semibold text-md sm:my-3 sm:text-lg">
                  {text.card3Text2}
                </div>
                <div className="more text-[#EB1B1B] font-light my-1 sm:my-3 text-md sm:text-lg">
                  What more
                </div>
              </div>
              <div className="w">
                <img
                  src={RectangleImage3}
                  className="w-18 sm:w-44 p-2"
                  alt=""
                />
              </div>
            </div>
            <div className="info font-semibold text-md sm:text-lg text-left sm:px-2">
              {text.card3Text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
