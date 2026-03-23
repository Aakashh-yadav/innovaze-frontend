// src/Context/UserContext.jsx
import React, { createContext, useState } from "react"; // Added 'React'

export const UserContext = createContext(null); 

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("beginner"); 
   
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
//  agle baar dashboard pe jaake aana hai or use user context ka role change karna hai to wo reflect ho jaye Dash board me