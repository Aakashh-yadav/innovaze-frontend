import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/feedpage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { SaveContext, SaveProvider } from './Context/SaveContext.jsx';


function App() {
  return (
    <BrowserRouter>
      <SaveProvider>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SaveProvider>
    </BrowserRouter>

  )
}

export default App;
