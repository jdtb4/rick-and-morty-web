import Card from "./Card.jsx";
import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  async function fetchCharacters() {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (search.trim() !== "") {
      url = `https://rickandmortyapi.com/api/character?name=${search}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setCharacters(data.results);
      } else {
        setCharacters([]);
      }
    } catch (error) {
      console.error(error);
      setCharacters([]);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        fetchCharacters={fetchCharacters}
      />
      <div className="px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-zinc-100">
        {characters.slice(0, 8).map((character) => (
          <Card key={character.name} character={character} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default Characters;
