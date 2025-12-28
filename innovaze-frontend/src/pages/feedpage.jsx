import FeedCard from "../components/feed/feedcard";
import { useState, useEffect } from "react";
import { getfeed } from "../Services/services";
import { useNavigate } from 'react-router-dom';

function FeedPage() {
  const [feed, setFeed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getfeed().then((data) => setFeed(data));
  }, []);

  return (
    <div
      id="feed-scroll"
      className="h-screen bg-black overflow-y-scroll snap-y snap-mandatory flex justify-center"
    >
      <div className="w-90">
        {feed.map((item) => (
          <FeedCard key={item.id} {...item} />
        ))}
      </div>
      <div className="fixed top-4 right-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default FeedPage;
