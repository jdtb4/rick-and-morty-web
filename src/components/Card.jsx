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
    <div className="bg-amber-300 flex flex-wrap">
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>{character.gender}</p>
        </div>
      ))}
    </div>
  );
}
export default Card;
