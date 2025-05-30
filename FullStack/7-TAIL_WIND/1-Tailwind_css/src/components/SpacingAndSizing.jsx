const SpacingAndSizing = () => {
  return (
    <div>
      <h3 className="text-center text-2xl">Spacing And Sizing</h3>
      <div>
        <button className="bg-blue-400 text-white p-4 m-1 ">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 ">Tıkla</button>
        <button className="bg-blue-400 text-white ml-4 ">Tıkla</button>
        <button className="bg-blue-400 text-white mx-4 py-2 ">Tıkla</button>
      </div>
      <div>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border border-red-500 rounded-md ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border border-orange-500 rounded-[3px] ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-4 py-4 border border-orange-500 rounded-full "></button>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border border-orange-500 rounded-[50%] ">
          Tıkla
        </button>
      </div>
      <div>
        <button className="bg-indigo-500 rounded-full py-2 m-1 w-20 ">
          Tıkla
        </button>
        <button className="bg-indigo-500 rounded-full py-2 m-1 w-1/2 ">
          Tıkla
        </button>
        <button className="bg-indigo-500 rounded-full py-2 m-1 w-[300px] ">
          Tıkla
        </button>
        <button className="bg-indigo-500 rounded-full py-2 m-1 min-w-[300px] h-12 ">
          Tıkla
        </button>
      </div>
    </div>
  );
};

export default SpacingAndSizing;
