import { useEffect, useRef, useState, useContext } from "react"; // Fixed UseContext typo
import { SaveContext } from "../../Context/SaveContext.jsx";
import { UserContext } from "../../Context/UserContext.jsx";

function FeedCard({ id, user: posterName, role: posterRole, caption, videosrc }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [muted, setMuted] = useState(true);
  
  // Get the CURRENT logged in user role from context
  const { user: currentUserRole } = useContext(UserContext);
  const { savePitch, savedPitches, removePitch } = useContext(SaveContext);

  const currentReel = { id, user: posterName, role: posterRole, caption, videosrc };
  const isSaved = id && savedPitches.some((pitch) => pitch.id === id);

  useEffect(() => {
    const scrollRoot = document.getElementById("feed-scroll");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        entry.isIntersecting ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
      },
      { root: scrollRoot, threshold: 0.75 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div ref={cardRef} onClick={toggleMute} className="h-screen w-full snap-start relative bg-black overflow-hidden border-b border-gray-800">
      <video ref={videoRef} src={videosrc} className="absolute inset-0 w-full h-full object-cover" muted={muted} loop playsInline />

      <div className="absolute bottom-6 left-4 right-4 text-white z-10 bg-gradient-to-t from-black/60 p-4">
        <p className="font-semibold">{posterName}</p>
        <p className="text-xs opacity-70 uppercase">{posterRole}</p>
        <p className="mt-1 text-sm">{caption}</p>

        {/* Logic based on the Role Switcher selection */}
        <div className="mt-4">
            {currentUserRole === "beginner" && (
            <button
                onClick={(e) => {
                e.stopPropagation();
                isSaved ? removePitch(id) : savePitch(currentReel);
                }}
                className={`px-6 py-2 rounded-full text-sm font-bold ${isSaved ? 'bg-red-600' : 'bg-blue-600'}`}
            >
                {isSaved ? 'Saved' : 'Save Pitch'}
            </button>
            )}

            {currentUserRole === "Mid-level" && (
            <button className="bg-green-600 px-6 py-2 rounded-full text-sm font-bold">
                Contact Founder
            </button>
            )}

            {currentUserRole === "Investor" && (
            <button className="bg-gold-500 bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                Invest Now
            </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
