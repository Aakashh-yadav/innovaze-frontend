import { UserProvider } from './Context/UserContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/feedpage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { SaveContext, SaveProvider } from './Context/SaveContext.jsx';
import Navbar from './components/navbar.jsx';

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
          </Routes>
        </div>
      </SaveProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
