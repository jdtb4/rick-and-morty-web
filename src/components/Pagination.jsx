function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center gap-7 m-10">
      <button
        className="bg-gray-700 p-4 rounded-full hover:bg-cyan-500 transition-all ease-in-out duration-300"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      >
        <img className="rotate-180 w-4" src="public/arrow-next.svg" />
      </button>
      <p className="text-cyan-500 text-lg font-bold flex items-center">
        {page}
      </p>
      <button
        className="bg-gray-700 p-4 rounded-full hover:bg-cyan-500 transition-all ease-in-out duration-300"
        onClick={() => setPage((prev) => prev + 1)}
      >
        <img className="w-4" src="public/arrow-next.svg" loading="lazy" />
      </button>
    </div>
  );
}

export default Pagination;
