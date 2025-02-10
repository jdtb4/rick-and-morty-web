import Card from "./Card.jsx";
import Search from "./Search";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, [page]);

  return (
    <>
      <Search page={page} />
      <div className="px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-zinc-100">
        {characters.slice(0, 8).map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Pagination setPage={setPage} />
    </>
  );
}

export default Characters;
