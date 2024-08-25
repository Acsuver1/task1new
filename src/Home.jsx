import React, { useContext } from "react";
import ProjectStore from "./context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore);

  return (
      <div className=" p-6 ml-[300px] ">
        <h1 className="text-3xl font-bold  text-red-600 mb-6 text-center ml-[-300px] ">Registered Users</h1>
        <div className=" bg-red-100  text-yellow p-6 rounded-lg shadow-lg w-[500px] mx-auto ml-[-350px]">
          <h2 className="text-lg font-semibold mb-2">
            Email: {state.email}
          </h2>

          <p className="text-md mb-2">Age: {state.age}</p>
          <button
            className="
              mt-6 bg-green-500 text-yellow font-bold py-2 px-4 rounded 
              hover:bg-green-800 hover:scale-105 active:bg-blue-800 
              relative
            "
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        </div>
        <Link to="/register">
      
        </Link>
      </div>
  );
};

export default Home;
