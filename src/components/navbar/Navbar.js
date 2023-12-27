import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
const Navbar = ({ onSearch = () => {}, cartItem = null }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    if (search.trim().length) {
      onSearch(search.trim());
      setSearch("");
    } else {
      setSearch("");
    }
  };
  return (
    <>
      <header className="shadow-xl">
        <nav>
          <div className="flex  w-full h-16 bg-sky-500 items-center md:justify-around justify-between px-9 md:px-0">
            <Link to="/">
              <h2 className="md:text-2xl  text-sm text-white font-semibold">
                E-commerce
              </h2>
            </Link>
            <div className="flex justify-center space-x-4 focus:outline-4 outline-offset-8 outline-blue-50">
              <input
                autoComplete="off"
                type="text"
                className="outline-none w-40 sm:w-56 md:w-80 h-10 p-3 text-lg rounded-md"
                name="search"
                value={search}
                placeholder="Search Here..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="bg-white px-5 hover:bg-slate-100 rounded-md"
              >
                Search
              </button>
            </div>
            <Link to="/cart">
              <div className="flex flex-col items-center -space-y-2">
                {cartItem > 0 && (
                  <span className="text-white ml-1 text-lg">
                    {cartItem > 9 ? "9+" : cartItem}
                  </span>
                )}
                <box-icon name="cart" color="white" size="md"></box-icon>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
