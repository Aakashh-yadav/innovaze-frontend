import FeedCard from "../components/feed/feedcard.jsx";

function FeedPage() {
  const dummyData = [
    { user: "Aakash", role: "Beginner", caption: "My first pitch!" },
    { user: "Sandeep", role: "Mid-level", caption: "Funding updates" },
    { user: "Ayush", role: "Investor", caption: "Looking for talent" },
  ];

  return (
  <div className="w-full bg-black min-h-screen py-6 flex justify-center">
    <div className="w-full max-w-md">
      {dummyData.map((item, index) => (
        <FeedCard
          key={index}
          user={item.user}
          role={item.role}
          caption={item.caption}
        />
      ))}
    </div>
  </div>
);

}

export default FeedPage;
