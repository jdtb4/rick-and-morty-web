import Card from "./Card";

function Characters() {
  return (
    <>
      <div className="bg-red-500 flex justify-between pl-22 pr-22">
        <p className="bg-zinc-100">Characters</p>
        <input type="search" placeholder="Search" />
      </div>
      <Card />
    </>
  );
}

export default Characters;
