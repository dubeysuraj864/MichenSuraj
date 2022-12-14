import Leaf from "../images/leaf.png";
import LemonRice from "../images/lemon-rice.png";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="hero bg-[#182144] text-white  rounded-bl-full rounded-br-full  sm:rounded-b-3xl  sm:mt-10 sm:flex sm:justify-center sm:items-center sm:w-full sm:mx-10 sm:p-10 mx-6 sm:pt-20 Motoya">
        <div
          className="top text-center text-4xl py-20 px-4 sm:p-0 sm:text-6xl sm:text-left sm:w-4/5 sm:ml-10  "
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          One stop <br /> solution for all your <br />{" "}
          <span className="text-[#F6D54B] font-bold">kitchen</span> hassle.
          <div className="sm:block hidden">
            <Button name={"Experience Now"} link={"#"} />
          </div>
        </div>

        <div
          className="bottom flex justify-center items-center p-0 m-4 sm:w-3/5"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <img
            src={Leaf}
            className="absolute mb-2 mr-10 z-20 scale-125  sm:w-5/5 "
            alt=""
          />
          <img src={LemonRice} className="w-80  sm:w-4/5 z-20  " alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
