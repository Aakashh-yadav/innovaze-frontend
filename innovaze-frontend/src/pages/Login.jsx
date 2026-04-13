
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }
//     // API call will go here later
//     console.log("Login:", email, password);
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">
//         <h2 className="text-white text-2xl font-bold mb-6">Login to Innovaze</h2>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-zinc-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-zinc-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={handleLogin}
//             className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Login
//           </button>
//         </div>

//         <p className="text-zinc-400 text-sm mt-4 text-center">
//           Don't have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             className="text-purple-400 cursor-pointer hover:underline"
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
