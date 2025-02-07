import { useEffect, useState } from "react";

function Card() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {characters.slice(0, 8).map((character) => (
        <div
          key={character.id}
          className="bg-zinc-800 text-zinc-100 p-5 m-3 h-fit w-xs rounded-lg"
        >
          <img src={character.image} alt={character.name} />
          <p className="pt-2 font-semibold">{character.name}</p>
          <p>
            <span className="text-sm font-semibold">Gender: </span>
            {character.gender}
          </p>
          <p>
            <span className="text-sm font-semibold">Status: </span>
            {character.status}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Card;
