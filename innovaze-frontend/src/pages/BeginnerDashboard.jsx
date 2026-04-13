import { useContext } from "react";
import { SaveContext } from "../Context/SaveContext";

export default function Dashboard() {
  const { savedPitches, removePitch } = useContext(SaveContext);

  return (
    <div className="min-h-screen bg-black text-white p-4 flex justify-center pt-20"> 
      
      <div className="w-full max-w-lg"> 
        <h1 className="text-2xl font-bold mb-4">
          Dashboard Page
        </h1>

        <div className="bg-gray-900 p-4 rounded-lg"> 
          <h2 className="text-lg-400 font-semibold mb-2">
            Saved pitches!!
          </h2>
          {savedPitches.length === 0 && (
            <p>No saved Pitches</p>
          )}
          {
            savedPitches.map((pitch) => (
              <div
                key={pitch.id}
                className="border border-gray-700 rounded-lg p-4 mb-4"
              >
                <p>
                  <video src={pitch.videosrc}
                    className="w-full h-48 object-cover rounded"
                    controls />
                  <p className="mt-2 font-semibold text-white">{pitch.user}</p>
                  <p className="text-sm opacity-70 text-white">{pitch.caption}</p>
                </p>
                <button
                  onClick={() => removePitch(pitch.id)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            )
            )
          }
        </div>

        <div className="bg-gray-900 p-4 rounded-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Your activity!!
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Track your interactions and progess
          </p>
        </div>
      </div>
    </div>
  );
}