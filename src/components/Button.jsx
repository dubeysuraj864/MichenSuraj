function Button(props) {
  return (
    <>
      <div className="btn  mt-10 " >
       
        <a href="#rectangle" rel="noopener noreferrer"> <button className={"  bg-[#1A2142]  text-white px-6 py-3 rounded-md drop-shadow-md hover:bg-white hover:text-[#182144]  ease-in-out duration-500 font-bold hover:drop-shadow-none transition-all text-lg mt-10"+props.style}>
        {props.name}
   
        </button></a>
      </div>
    </>
  );
}

export default Button;
