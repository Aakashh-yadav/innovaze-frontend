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
        if (!pitch || !pitch.id) return; // Safety check
        setSavedPitches((prev) => {
            const exists = prev.find((p) => p.id === pitch.id);
            if (exists) return prev;
            return [...prev, pitch]; // Effect below will handle localStorage
        });
    };

    // ✅ REMOVE PITCH
    const removePitch = (pitchId) => {
        setSavedPitches((prev) => prev.filter((p) => p.id !== pitchId));
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