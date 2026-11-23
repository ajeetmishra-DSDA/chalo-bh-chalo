import { createContext } from "react";
	
export const AppContext = createContext();

export default function AppProvider({ children }) {
  const user = "Rohit";
 
  return (
    <AppContext.Provider value={user}>
      {children}
    </AppContext.Provider>
  );
}