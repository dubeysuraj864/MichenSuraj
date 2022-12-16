import { useState } from "react";
import Arrow from "../images/arrow.webp";
import "./FAQ.css";

function FAQ(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="faq flex justify-center mb-0 px-2 ">
        <div className="w-full sm:w-1/2 px-6">
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="title flex justify-between items-center mb-5 cursor-pointer font-semibold"
          >
            <span>{props.title}</span>
            <span>
              {show ? (
                <img className="arrowBefore" src={Arrow} width={30} alt="" />
              ) : (
                <img className="arrowAfter" src={Arrow} width={30} alt="" />
              )}
            </span>
          </div>
          {show ? (
            <div className="open">
              {props.para} <hr className="mt-6 border-3 border-black" />
            </div>
          ) : (
            <div className="close">{props.para}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default FAQ;
