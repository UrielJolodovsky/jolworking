

export default function Header() {
  return (
    <header className="flex justify-center items-center z-10 relative p-5">
      <h1 className="text-white text-xl italic">Jolworking</h1>
      <button className="absolute right-3 sm:right-10 px-3 py-1.5 text-black bg-green-600 rounded-md text-sm transition hover:bg-green-400">
        Sign Up
      </button>
      <hr className="bg-white" />
    </header>
  );
}