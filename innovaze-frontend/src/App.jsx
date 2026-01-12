import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/feedpage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { SaveContext, SaveProvider } from './Context/SaveContext.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <SaveProvider> <Route path="/" element={<FeedPage />} /></SaveProvider>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
