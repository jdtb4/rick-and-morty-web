function Search({ page }) {
  return (
    <div className="flex flex-col gap-10 justify-between pl-32 pr-32 pb-7 mt-10">
      <p className="bg-zinc-100 w-fit rounded py-2 px-5 uppercase font-semibold ">
        Characters
      </p>

      <div className="flex items-center w-fit bg-gray-800 p-2 rounded-lg shadow-md gap-7">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent border-none outline-none px-2 text-white placeholder-gray-500"
        />
        <button className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg">
          <img className="w-4" src="/public/icon-search.svg"></img>
        </button>
      </div>

      <p className="bg-amber-50">Page: {page} </p>
    </div>
  );
}

export default Search;
