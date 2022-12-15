function Button(props) {
  return (
    <>
      <div className="btn  mt-10 " >
        <button className="  bg-[#1A2142]  text-white px-6 py-3 rounded-md drop-shadow-md hover:bg-white hover:text-[#182144]  ease-in-out duration-500 font-bold hover:drop-shadow-none transition-all text-lg mt-10">
          {" "}
          <a href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </button>
      </div>
    </>
  );
}

export default Button;
