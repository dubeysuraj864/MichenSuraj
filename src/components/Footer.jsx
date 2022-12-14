import Instagram from "../images/insta.png";

function Footer() {
  return (
    <>
      <div className="footer bg-[#1A2142] text-white sm:flex justify-around items-center sm:p-10 p-6 mb-2">
        <div className="text-3xl mb-4 footer-logo">michen.</div>
       
        <div className="my-2">
        <a href="https://www.instagram.com/michen_0/" target="_blank" rel="noopener noreferrer"><img src={Instagram} width={50} alt="" /></a>
        </div>
      </div>
    </>
  );
}

export default Footer;
