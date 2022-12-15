/* eslint-disable react/style-prop-object */
import Leaf from "../images/leaf.webp";
import LemonRice from "../images/lemon-rice.webp";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="hero sm:mx-10 mx-5 w-full flex justify-center sm:items-center px-5 bg-[#1A2142] text-white rounded-b-full sm:rounded-b-3xl">
        <div className="container sm:flex sm:justify-around sm:items-center  sm:pt-10 sm:pr-10 sm:px-5 sm:py-20  w-full h-fit sm:h-auto">
          <div className="left sm:mr-20 sm:pt-14 sm:w-1/2">
            <div className="text text-center  sm:py-8 py-10 sm:text-left text-[30px] sm:text-6xl ">
              <div className="sm:pb-10">
                One stop <br /> solution for all your <br />{" "}
                <span className="text-[#F6D54B] font-bold">kitchen</span>{" "}
                hassle.
              </div>
              <Button
                name={"Experience Now"}
                style={
                  "bg-[#1A2142]  text-white px-6 py-3 rounded-md drop-shadow-md hover:bg-white hover:text-[#182144]  ease-in-out duration-500 font-bold hover:drop-shadow-none transition-all text-lg mt-10  border-white border-2 hidden sm:block"
                }
              />
            </div>
          </div>
          <div className="right relative w-full sm:w-1/3 h-fit">
            <div
              className="images flex justify-center m-auto items-center py-10 sm:p-10  z-10 
            w-fit sm:w-[309px] h-[320px] sm:h-[309px] "
            >
              <img
                src={Leaf}
                className="absolute sm:mr-10 w-[300px] sm:w-[300px] sm:scale-[2.0] scale-[1.4] pb-8 mr-10 sm:pb-0 "
                alt="leaf"
              />

              <img
                src={LemonRice}
                className="absolute w-[309px] sm:mt-10 z-10 sm:w-[309px] sm:scale-[1.3]"
                alt="lemon_rice"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
