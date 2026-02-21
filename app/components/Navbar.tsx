export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black">
      <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
      <button className="bg-red-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}
