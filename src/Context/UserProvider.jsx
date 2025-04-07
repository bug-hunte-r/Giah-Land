import React, { createContext, useContext, useEffect, useState } from 'react';
import { decrypt } from '../utils/utils';

const userContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Start as null, not {}
  const [loading, setLoading] = useState(true); // Track loading

  useEffect(() => {

    const cookies = document.cookie
      .split('; ')
      .find((row) => row.startsWith('session='));
    const session = cookies ? cookies.split('=')[1] : null;

    if (!session) {
      setLoading(false);
      return;
    }

    decrypt(session)
      .then((decodedUser) => {
        console.log('Decrypted user:', decodedUser);
        setUser(decodedUser || null); // Set null if decodedUser is falsy
      })
      .catch((err) => {
        setUser(null); // Reset to null on error
      })
      .finally(() => {
        setLoading(false); // Done loading
      });
  }, []);

  return (
    <userContext.Provider value={{ user, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
export default UserProvider;