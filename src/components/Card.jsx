function Card({ character }) {
  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-md shadow-cyan-300 transition-all hover:scale-105">
      <img className="rounded" src={character.image} alt={character.name} />
      <p className="pt-2 text-cyan-500 font-semibold">{character.name}</p>
      <p className="text-sm">
        <span className="text-sm text-cyan-500 font-semibold">Species: </span>
        {character.species}
      </p>
      <p className="text-sm">
        <span className="text-sm text-cyan-500 font-semibold">Status: </span>
        {character.status}
      </p>
    </div>
  );
}
export default Card;
