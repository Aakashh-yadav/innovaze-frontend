export default function Dashboard() {
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
          <p className="text-grey-400 text-sm mt-2"> 
            your saved startup Ideas will appear here.
          </p>
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