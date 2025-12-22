function Dashboard({ saved }) {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-semibold mb-4">Saved Pitches</h1>

      {saved.length === 0 ? (
        <p className="opacity-60">No saved pitches yet</p>
      ) : (
        saved.map((item) => (
          <div
            key={item.id}
            className="border border-white/20 rounded p-3 mb-3"
          >
            <p className="font-semibold">{item.user}</p>
            <p className="text-sm opacity-70">{item.caption}</p>
            <p className="text-xs opacity-50">{item.role}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
