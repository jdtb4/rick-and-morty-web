function Pagination({ page, setPage, totalPages }) {
  const maxPageShown = 2;
  const lasPagesShown = 3;

  const generatePageNumbers = () => {
    let pages = [];

    if (totalPages <= maxPageShown + lasPagesShown) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= maxPageShown; i++) {
        pages.push(i);
      }
      pages.push("...");
      for (let i = totalPages - lasPagesShown + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center gap-7 m-10">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded-lg bg-gray-800 text-white font-bold cursor-pointer disabled:opacity-50"
      >
        ‹
      </button>

      {generatePageNumbers().map((num, index) =>
        num === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-400">
            {num}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setPage(num)}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              page === num
                ? "bg-cyan-500 text-balck font-bold"
                : "bg-gray-800 text-white font-bold"
            }`}
          >
            {num}
          </button>
        )
      )}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-3 py-1 rounded-lg bg-gray-800 text-white font-bold cursor-pointer disabled:opacity-50"
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
