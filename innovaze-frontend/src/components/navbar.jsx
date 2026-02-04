import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, Bell, User, ChevronDown } from 'lucide-react'; // Added Chevron icon
import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx"; // Import your context

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Access the global user and the setter from context
  const { user, setUser } = useContext(UserContext);

  const isActive = (path) => location.pathname === path;

  const baseClasses = "flex justify-around items-center bg-gray-500/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full p-2 w-72";
  const activeTabClasses = "bg-purple-600/50 text-white rounded-full p-2 w-1/2 flex items-center justify-center relative overflow-hidden shadow-xl shadow-purple-600/30";
  const inactiveTabClasses = "text-gray-400 p-2 w-1/2 flex items-center justify-center";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-4">
      
      {/* 1. Messages Button */}
      <button 
        onClick={() => alert("Messages feature coming soon!")}
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

      {/* 3. Right Side: Dropdown + Notifications + Profile */}
      <div className="flex items-center space-x-3"> 
        
        {/* ROLE SWITCHER DROPDOWN */}
        <div className="relative flex items-center bg-gray-800/50 border border-white/10 rounded-lg px-2 py-1">
          <select
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="bg-transparent text-white text-xs font-semibold outline-none cursor-pointer appearance-none pr-6 pl-2"
          >
            <option className="bg-gray-900" value="beginner">Beginner</option>
            <option className="bg-gray-900" value="Mid-level">Mid-level</option>
            <option className="bg-gray-900" value="Investor">Investor</option>
          </select>
          {/* Custom arrow icon since appearance-none hides the default one */}
          <ChevronDown size={14} className="absolute right-2 pointer-events-none text-gray-400" />
        </div>

        <button 
          onClick={() => alert("No new notifications")}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 relative pointer-events-auto"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-black bg-red-500" />
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition duration-300 pointer-events-auto"
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
