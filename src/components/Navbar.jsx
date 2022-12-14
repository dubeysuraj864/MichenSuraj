import Phone from "../images/phone.svg";

function Navbar() {
    return (<>
        <nav className="flex justify-between items-center bg-[#1A2142] text-white p-2 sm:py-5 drop-shadow-md px-6 sm:px-40 fixed top-0 z-40 w-full sm:w-full font">
            <div className="logo font-bold text-2xl 
        ">
                michen.
            </div>
            <div className="contact">
                <div className="p-num">
                   <a href="tel:+91 6849842700" target="_blank" rel="noopener noreferrer"> +91-6849842700</a>
                </div>
                <div className="call text-[#EEC843] font-bold text-sm flex items-center animate-bounce">
                    <div>
                        <img src={Phone} className="w-4 mr-1" alt="" />
                    </div>
                    <a href="tel:+91 6849842700" target="_blank" rel="noopener noreferrer">    Make a call</a>
                 
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;