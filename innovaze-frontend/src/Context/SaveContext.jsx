import { createContext, useEffect, useState } from "react";
const SaveContext = createContext(null);
const SaveProvider = ({ children }) => {
    const [savedPitches, setSavedPitches] = useState(() => {
        []
        // const storedPitches = localStorage.getItem("savedPitches");
        // return storedPitches ? JSON.parse(storedPitches) : [];
    });
    useEffect(() => {
        const saved = localStorage.getItem("savedPitches");
        if (saved) {
            setSavedPitches(JSON.parse(saved));
        }
    },[]);
    // Function to save a pitch
    const savePitch = (pitch) => {
        const updatedPitches = [...savedPitches, pitch];
        setSavedPitches(updatedPitches);
        localStorage.setItem("savedPitches", JSON.stringify(updatedPitches));
    };
    // Function to remove a pitch
    const removePitch = (pitchId) => {
        const updatedPitches = savedPitches.filter((pitch) => pitch.id !== pitchId);
        setSavedPitches(updatedPitches);
        localStorage.setItem("savedPitches", JSON.stringify(updatedPitches));
    };

    return (
        <SaveContext.Provider value={{ savedPitches, savePitch, removePitch }}>
            {children}
        </SaveContext.Provider>
    );
}
export { SaveContext, SaveProvider };