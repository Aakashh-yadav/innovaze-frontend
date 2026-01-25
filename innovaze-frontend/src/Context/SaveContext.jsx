import { createContext, useState, useEffect } from "react";

const SaveContext = createContext(null);

const SaveProvider = ({ children }) => {
    const [savedPitches, setSavedPitches] = useState(() => {
        try {
            const stored = localStorage.getItem("savedPitches");

            if (!stored) {
                return [];
            }

            const parsed = JSON.parse(stored);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error("Corrupted savedPitches, resetting", error);
            localStorage.removeItem("savedPitches");
            return [];
        }
    });

    // ✅ SYNC STATE TO LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem("savedPitches", JSON.stringify(savedPitches));
    }, [savedPitches]);

    // ✅ SAVE PITCH (NO DUPLICATES)
    const savePitch = (pitch) => {
        setSavedPitches((prev) => {
            const exists = prev.find((p) => p.id === pitch.id);
            if (exists) return prev;

            const updated = [...prev, pitch];
            localStorage.setItem("savedPitches", JSON.stringify(updated));
            return updated;
        });
    };

    // ✅ REMOVE PITCH
    const removePitch = (pitchId) => {
        setSavedPitches((prev) => {
            const updated = prev.filter((p) => p.id !== pitchId);
            localStorage.setItem("savedPitches", JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <SaveContext.Provider
            value={{ savedPitches, savePitch, removePitch }}
        >
            {children}
        </SaveContext.Provider>
    );
};

export { SaveContext, SaveProvider };
