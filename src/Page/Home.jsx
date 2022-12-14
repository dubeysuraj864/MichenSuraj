import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Button from "../components/Button";
import Rectangle from "../components/Rectangle";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Whatsapp from "../images/whatsapp.png";
import FixedFooter from "../components/FixedFooter";




function Home() {
  return (
    <>
      <div className="home relative bg-[#82C270] pb-10 ">
        <div className="fixed z-40 bottom-10 right-3">
          <a href="https://wa.me/message/SLRIMKZXUT2KO1" target="_blank" rel="noopener noreferrer"><img className="drop-shadow-lg" src={Whatsapp} width={50} alt="" /></a>
      
          
        </div>
        <Navbar />

       <div className="flex justify-center">
       <Hero />
       </div>

        {/* <div className="sm:hidden flex  justify-center items-center">
          <Button name={"Experience Now"} link={"//"} />
        </div> */}
        <div className="rectangles sm:flex  justify-center items-center sm:mt-10">
          <div className="">
            <Rectangle />
          </div>
        </div>
      </div>
      <div className="faq mb-10">
        <div className=" text-center my-10 font-bold text-xl">
          Frequently ask Questions
         
        </div>
        <div>
            <FAQ title={"Where you send my meal plan"} para={" We send meal plan to your WhatsApp on a daily basis. You can suggest us changes if you want on WhatsApp only"} />
          </div>
          <div>
            <FAQ title={"From where you order my grocery"} para={"We order grocery using known grocery delivery apps like Blinkit, Instamart, Zepto, Milkbasket etc. You can suggest your favourite app we will use it. "} />
          </div>
          <div>
            <FAQ title={"What if you charge more for grocery"} para={"As mentioned above we use known grocery delivery apps and their invoices. We don't charge any extra amount other than the invoice. "} />
          </div>
          <div>
            <FAQ title={"How you communicate with my cook"} para={" We communicate with them using WhatsApp voice messages and phone calls."} />
          </div>

        
      </div>
      <Footer/>
      <FixedFooter/>
    </>
  );
}

export default Home;
