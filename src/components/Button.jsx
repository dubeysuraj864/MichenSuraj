function Button(props) {
  return (
    <>
      <div className="btn  my-10 " >
        <button className=" sm:border-white bg-[#1A2142] sm:border-2 text-white px-6 py-3 rounded-md drop-shadow-md hover:bg-white hover:text-[#182144]  ease-in-out duration-500 font-bold hover:drop-shadow-none transition-all text-lg mt-10">
          {" "}
          <a href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </button>
      </div>
    </>
  );
}

export default Button;
