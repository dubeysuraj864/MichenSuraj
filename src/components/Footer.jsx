import Instagram from "../images/insta.webp";
import Youtube from "../images/youtube.webp";

function Footer() {
  return (
    <>
      <div className="footer bg-[#1A2142] text-white flex  items-center sm:p-4 p-6 sm:mb-6 mb-8">
        <div className="my-2">
          <a
            href="https://www.instagram.com/michen_0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} width={60} alt="" />
          </a>
        </div>
        <div className="my-2">
          <a
            href="https://www.instagram.com/michen_0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} width={50} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
