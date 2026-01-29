import { useNavigate, useLocation } from "react-router-dom"; // Syntax error here
import { MessageCircle, Bell, User } from 'lucide-react'; // Import the User icon

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseClasses = "flex justify-around items-center bg-gray-500/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full p-2 w-72";
  const activeTabClasses = "bg-purple-600/50 text-white rounded-full p-2 w-1/2 flex items-center justify-center relative overflow-hidden shadow-xl shadow-purple-600/30";
  const inactiveTabClasses = "text-gray-400 p-2 w-1/2 flex items-center justify-center";

  return (
    // Outer container: uses 'justify-between' to space elements out
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-4">
      
      {/* 1. Messages Button (Left side) */}
      <button 
        onClick={() => alert("Navigate to Messages!")}
        className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 pointer-events-auto"
      >
        <MessageCircle size={20} />
      </button>

      {/* 2. Central Navigation Dock */}
      <div className={baseClasses}>
        <button
          onClick={() => navigate("/")}
          className={`pointer-events-auto transition-all duration-300 ${
            isActive("/") ? activeTabClasses : inactiveTabClasses
          }`}
        >
          <span className="text-sm font-medium">Feed</span>
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className={`pointer-events-auto transition-all duration-300 ${
            isActive("/dashboard") ? activeTabClasses : inactiveTabClasses
          }`}
        >
          <span className="text-sm font-medium">Dashboard</span>
        </button>
      </div>

      {/* 3. Right Icons (Notifications & Profile) wrapped in a flex container */}
      <div className="flex items-center space-x-3"> 
        <button 
          onClick={() => alert("Navigate to Notifications!")}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 relative pointer-events-auto"
        >
          <Bell size={20} />
          {/* Optional: A simple red badge */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-black bg-red-500" />
        </button>

        {/* 4. Profile Button (Right side, next to notifications) */}
        <button
          onClick={() => alert("Navigate to Profile!")}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 pointer-events-auto"
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
