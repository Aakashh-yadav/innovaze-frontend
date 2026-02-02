import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("beginner" , "Mid-level", "Investor");
   
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
//Agli baar Role Swithching ka feature add karna hai 