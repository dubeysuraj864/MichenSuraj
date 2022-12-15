import Leaf from "../images/leaf.webp";
import LemonRice from "../images/lemon-rice.webp";

function Hero() {
  return (
    <>
      <div className="hero w-full flex justify-center px-5 ">
        <div className="container sm:flex sm:justify-around sm:items-center bg-[#1A2142] text-white sm:pt-10 sm:px-5 sm:py-10 rounded-b-full sm:rounded-b-3xl w-full h-fit sm:h-auto">
          <div className="left ">
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="text text-center py-10 sm:py-20 sm:text-left text-[30px] sm:text-[50px]">
              One stop <br /> solution for all your <br />{" "}
              <span className="text-[#F6D54B] font-bold">kitchen</span> hassle.
            </div>
          </div>
          <div className="right relative sm:w-auto w-full h-fit">
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
              className="images flex justify-center m-auto items-center py-10 sm:p-10  z-10 
            w-fit sm:w-[309px] h-[320px] sm:h-[309px] "
            >
              <img
                src={Leaf}
                className="absolute -left-5 top-5 sm:bottom-10 sm:left-0 w-[320px] pl-4 sm:w-[309px] sm:scale-150 scale-[1.3]"
                alt="leaf"
              />

              <img
                src={LemonRice}
                className="absolute w-[309px] sm:left-2 z-10 sm:w-[309px]"
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
