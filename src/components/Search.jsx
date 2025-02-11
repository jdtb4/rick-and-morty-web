function Search({ search, setSearch, fetchCharacters }) {
  return (
    <div className="pl-32 pr-32 pb-10 mt-32">
      <div className="flex items-center w-fit bg-gray-800 p-2 rounded-lg shadow-md gap-7">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-transparent border-none outline-none px-2 text-white placeholder-gray-500"
        />
        <button
          className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
          onClick={() => fetchCharacters(search)}
        >
          <img className="w-4" src="/public/icon-search.svg"></img>
        </button>
      </div>
    </div>
  );
}

export default Search;
