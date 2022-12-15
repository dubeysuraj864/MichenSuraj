import Leaf from "../images/leaf.png";
import LemonRice from "../images/lemon-rice.png";

function Hero() {
  return (
    <>
      <div className="hero w-full flex justify-center px-5 ">
        <div className="container sm:flex sm:justify-around sm:items-center bg-[#1A2142] text-white sm:pt-10 sm:px-5 sm:py-10 rounded-b-full sm:rounded-b-3xl w-full h-fit sm:h-auto">
          <div className="left ">
            <div className="text text-center py-20 sm:text-left text-[30px] sm:text-[50px]">
              One stop <br /> solution for all your <br />{" "}
              <span className="text-[#F6D54B] font-bold">kitchen</span> hassle.
            </div>
          </div>
          <div className="right relative w-full sm:w-auto h-fit">
            <div
              className="images flex justify-center m-auto items-center p-20 sm:p-10  z-10 
            w-[360px] sm:w-[309px] h-[360px] sm:h-[309px] "
            >
              <img
                src={Leaf}
                className="absolute left-0 sm:top-2 sm:left-0 w-[315px] pl-4 sm:w-[309px] sm:scale-150 scale-150"
                alt=""
              />

              <img
                src={LemonRice}
                className="absolute w-[370px] sm:left-2 z-10 sm:w-[309px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero  sm:mt-10 w-full  Motoya">
        <div
          className=" bg-[#182144] text-white rounded-bl-full rounded-br-full  sm:rounded-b-3xl sm:flex sm:justify-center sm:items-center mx-8 sm:px-10 sm:py-20 "
        >
          <div
            className="top text-center text-3xl  sm:text-6xl  px-4 sm:p-0 sm:text-left sm:ml-10  resize m-auto sm:w-[50%] py-20"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            One stop <br /> solution for all your <br />{" "}
            <span className="text-[#F6D54B] font-bold">kitchen</span> hassle.
          </div>

          <div
            className="bottom relative flex items-start justify-center  p-0 "
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <img
              src={Leaf}
              className="absolute z-20 sm:scale-125 w-96 sm:w-[380px]  "
              alt=""
            />
            <img src={LemonRice} className="  sm:w-[309px] z-20  " alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
