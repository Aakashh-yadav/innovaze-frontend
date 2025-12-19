import { useEffect, useRef, useState } from "react";

function FeedCard({ user, role, caption, videosrc }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const scrollRoot = document.getElementById("feed-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        });
      },
      {
        root: scrollRoot,
        threshold: 0.75,
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // 🔥 Tap handler
  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <div
      ref={cardRef}
      onClick={toggleMute}   // 👈 TAP ANYWHERE
      className="h-screen snap-start relative bg-black overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videosrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute bottom-6 left-4 text-white z-10">
        <p className="font-semibold">{user}</p>
        <p className="text-sm opacity-70">{role}</p>
        <p className="mt-1">{caption}</p>
        <p className="text-xs opacity-60 mt-1">
          {isMuted ? "Tap to unmute 🔇" : "Sound on 🔊"}
        </p>
      </div>
    </div>
  );
}

export default FeedCard;
