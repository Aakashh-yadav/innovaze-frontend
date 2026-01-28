import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SaveContext } from "../Context/SaveContext";
export default function Dashboard() {

  const { savedPitches, removePitch } = useContext(SaveContext);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className=" text-2xl font-bold mb-4">
        dashboard page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-grey-900 p-4 rounded-lg ">
          <h2 className=" text-lg-400 font-semibold mb-2">
            Saved pitches!!
          </h2>
          {savedPitches.length === 0 && (
            <p>No saved Pitches</p>
          )}
          {
            savedPitches.map((pitch) => (
              <div
                key={pitch.id}
                className="border border-grey-700 rounded-lg p-4 mb-4"
              >
                {/* Display pitch details */}
                <p>
                  <video src={pitch.videosrc}
                    className="w-full h-48 object-cover rounded"
                    controls />
                  {/*Meta*/}
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
        <div className="fixed top-4 right-4">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            back to feed
          </button>
        </div>
        <div className="bg-grey-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Your activity!!
          </h2>
          <p className="text-grey-400 text-sm mt-2">
            Track your interactions and progess
          </p>
        </div>
      </div>
    </div>
  );
}
// ab saare errors fix kar diye ab sirf aage bdna hai jisse humara application showcase hoga bss ek baat ka dhyaan rkhna hai chat gpt se shi to google ka ai mode hai 