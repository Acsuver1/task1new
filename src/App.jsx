import Home from "./Home";
import Register from "./Register";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <nav className="mb-6 flex gap-[200px] justify-center">
        <Link
          to="/"
          className={`
            px-4 py-2 rounded text-white font-semibold 
            ${location.pathname === "/" ? "bg-red-400" : "bg-blue-400"}
            hover:bg-blue-500 active:bg-blue-700 transition duration-300
          `}
        >
          Users
        </Link>
        <Link
          to="/register"
          className={`
            px-4 py-2 rounded text-white font-semibold 
            ${location.pathname === "/register" ? "bg-red-600" : "bg-green-400"}
            hover:bg-blue-500 active:bg-blue-700 transition duration-300
          `}
        >
          Sign In
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;


