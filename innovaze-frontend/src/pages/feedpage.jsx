import FeedCard from "../components/feed/feedcard";
import { useState, useEffect } from "react";
import { getfeed } from "../Services/services";
function FeedPage() {
  const [Feed, setFeed] = useState([]);
  useEffect(() => {
    getfeed().then(
      (data) => { setFeed(data) });
  }, []);
  return (
    <div
      id="feed-scroll"
      className="h-screen bg-black overflow-y-scroll snap-y snap-mandatory flex justify-center"
    >
      <div className="w-[360px]">
        {Feed.map((item) => (
          <FeedCard
            key={item.id} {...item} />
        ))}

      </div>
    </div>
  );
}

export default FeedPage;
