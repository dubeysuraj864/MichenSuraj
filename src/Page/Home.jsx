import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import Rectangle from "../components/Rectangle";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Whatsapp from "../images/whatsapp.webp";
import FixedFooter from "../components/FixedFooter";
import Button from "../components/Button";
import "./Home.css";
const Hero = React.lazy(() => import("../components/Hero"));

function Home() {
  var preloader = document.getElementById('loading');
  function loaderFunction() {
      preloader.style.display = 'none';
  }
  return (
    <>
      <div onLoad={loaderFunction} className="home relative bg-[#82C270] pb-10 ">
        <div className="fixed z-40 bottom-16 sm:bottom-12 right-2 transition-all  hover:scale-110 scroll-smooth ">
          <a
            href="https://wa.me/message/SLRIMKZXUT2KO1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="drop-shadow-lg " src={Whatsapp} width={50} alt="" />
          </a>
        </div>
        <Navbar />

        <div className="flex justify-center">
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
        </div>

        <div className=" flex  justify-center items-center sm:mx-20 p-0">
          <Button name={"What We Do"} link={"#"} />
        </div>

        <div className="rectangles sm:flex  justify-center items-center sm:mt-10">
          <div className="">
            <Rectangle id="rectangle" />
          </div>
        </div>
      </div>
      <div className="faq mb-10">
        <div className=" text-center my-10 font-bold text-xl">
          Frequently ask Questions
        </div>
        <div>
          <FAQ
            title={"Where you send my meal plan"}
            para={
              " We send meal plan to your WhatsApp on a daily basis. You can suggest us changes if you want on WhatsApp only"
            }
          />
        </div>
        <div>
          <FAQ
            title={"From where you order my grocery"}
            para={
              "We order grocery using known grocery delivery apps like Blinkit, Instamart, Zepto, Milkbasket etc. You can suggest your favourite app we will use it. "
            }
          />
        </div>
        <div>
          <FAQ
            title={"What if you charge more for grocery"}
            para={
              "As mentioned above we use known grocery delivery apps and their invoices. We don't charge any extra amount other than the invoice. "
            }
          />
        </div>
        <div>
          <FAQ
            title={"How you communicate with my cook"}
            para={
              " We communicate with them using WhatsApp voice messages and phone calls."
            }
          />
        </div>
      </div>
      <Footer />
      <FixedFooter />
    </>
  );
}

export default Home;
