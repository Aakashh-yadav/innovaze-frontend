import { UserProvider } from "./Context/UserContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/feedpage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { SaveContext, SaveProvider } from "./Context/SaveContext.jsx";
import Navbar from "./components/navbar.jsx";
import Login from "./pages/Login.jsx";
// import Signup from "./pages/Signup.jsx";
// import Investor_Dashboard from "./pages/Investor_Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SaveProvider>
          {/* ADDED: Ensure the main app div covers the full width and height */}
          <div className="min-h-screen w-screen bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<FeedPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/investor-dashboard"
                element={<Investor_Dashboard />}
              />
            </Routes>
          </div>
        </SaveProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
