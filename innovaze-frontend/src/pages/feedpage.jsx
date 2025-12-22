import FeedCard from "../components/feed/FeedCard";
import { useState, useEffect } from "react";
import { getfeed } from "../Services/services";

function FeedPage() {
  const [feed, setFeed] = useState([]);

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
    </div>
  );
}

export default FeedPage;
