import Card from "./Card";

function Characters() {
  return (
    <>
      <div className="flex justify-between pl-32 pr-32 pb-7 mt-10">
        <p className="bg-zinc-100 rounded py-2 px-5 uppercase font-semibold ">
          Characters
        </p>
        <input
          className="border-1 rounded border-zinc-100 p-2 w-1/4 text-zinc-100 focus:outline-none"
          type="search"
          placeholder="Search"
        />
      </div>
      <Card />
    </>
  );
}

export default Characters;
