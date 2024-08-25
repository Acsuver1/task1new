import { useContext, useState } from "react";
import ProjectStore from "./context/store";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [state, dispatch] = useContext(ProjectStore);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an async operation
    setTimeout(() => {
      dispatch({ type: "REGISTER", payload: { email, password, age } });
      setLoading(false);
      
      // Show success toast
      toast.success("Registration successful!");

      // Clear input fields after registration
      setEmail('');
      setPassword('');
      setAge('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ml-[50px] ">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-100">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-user text-teal-400"></i>
            </span>
            <input
              type="text"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-100"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                dispatch({ type: "email", email: e.target.value });
              }}
            />
          </div>
          
         
          
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-lock text-teal-400"></i>
            </span>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-100"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                dispatch({ type: "password", password: e.target.value });
              }}
            />
          </div>
          
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-lock text-teal-400"></i>
            </span>
            <input
              type="password"
              placeholder="Age"
              className="w-full py-3 pl-10 pr-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-blue-100"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                dispatch({ type: "age", age: e.target.value });
              }}
            />
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 text-center text-white bg-teal-500 rounded-lg font-bold hover:bg-teal-600 transition-all duration-300 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>

          <p className="text-center text-sm mt-4 text-blue-100">
            Already a member?{" "}
            <a href="/login" className="text-teal-400 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
