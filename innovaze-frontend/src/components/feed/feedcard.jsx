function FeedCard({ user, role, caption, videoSrc }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-4 mb-4 w-full max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-700 rounded-full mr-2"></div>
        <div>
          <p className="font-bold">{user}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="mb-2">{caption}</p>
      <div className="bg-gray-800 h-48 flex items-center justify-center rounded-lg">
        <p>Video Placeholder</p>
      </div>
    </div>
  );
}

export default FeedCard;
