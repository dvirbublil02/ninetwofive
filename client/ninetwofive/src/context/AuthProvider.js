import { createContext,useState,useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    // Retrieve data from localStorage if available
  const storedAuthData = localStorage.getItem('authData');
  const initialAuthData = storedAuthData ? JSON.parse(storedAuthData) : {};

  const [auth, setAuth] = useState(initialAuthData);

  // Update localStorage when auth changes
  useEffect(() => {
    localStorage.setItem('authData', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;