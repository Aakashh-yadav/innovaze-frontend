import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { SaveContext } from "../../Context/SaveContext.jsx";
import { data } from "autoprefixer";





function FeedCard({ user, role, caption, videosrc }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const { savePitch, savedPitches, RemovePitch } = useContext(SaveContext);

  const isSaved = savedPitches.some((pitch) => pitch.id === data.id);
  useEffect(() => {
    const scrollRoot = document.getElementById("feed-scroll");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => { });
        } else {
          videoRef.current.pause();
        }
      },
      {
        root: scrollRoot,
        threshold: 0.75,
      }
    );

    const el = cardRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div
      ref={cardRef}
      onClick={toggleMute}
      className="h-screen snap-start relative bg-black overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videosrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted={muted}
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute bottom-6 left-4 right-4 text-white z-10">
        <p className="font-semibold">{user}</p>
        <p className="text-xs opacity-70">{role}</p>
        <p className="mt-1 text-sm">{caption}</p>

        <p className="mt-2 text-xs opacity-60">
          Tap to {muted ? "unmute 🔊" : "mute 🔇"}
        </p>
        
        <button onClick={(e) => {
          e.stopPropagation();
          if (isSaved) {
            RemovePitch(data.id);
          }
          else {
            savePitch(data)
          }
        }}
          className={`mt-4 px-4 py-2 rounded-full text-sm font-medium ${isSaved ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default FeedCard;
