import React, { createContext, useContext, useEffect, useState } from 'react'
import { decrypt } from '../utils/utils';


const userContext = createContext(null)
const UserProvider = ({children}) => {

  const [user, setUser] = useState({});

  useEffect(() => {
    // Access document.cookie inside useEffect
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="));

    const session = cookies ? cookies.split("=")[1] : null;

    if (session) {
      // Decrypt the session cookie
      decrypt(session).then((decodedUser) => {
        setUser(decodedUser); // Update state with user data
      });
    }
  }, []);

  return (
    <userContext.Provider value={{user}}>
      {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)
export default UserProvider