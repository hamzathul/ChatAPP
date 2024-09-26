import React, { createContext, useState, ReactNode, useContext } from "react";

interface AuthContextType {
  authUser: any;
  setAuthUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(  // 1st
  undefined
);

export const useAuthContext = ()=>{ // 3rd, to consume the values, we use this hook
  return useContext(AuthContext)
}

interface AuthContextProviderProps {
  children: ReactNode; 
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ // 2nd
  children,
}) => {
   
  const [authUser, setAuthUser] = useState<any>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("chat-user") || null) // to get the information from browser local storage
  );

  return ( //wrap our application with the values
    <AuthContext.Provider value={{ authUser, setAuthUser }}> 
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {

//     const [authUser, setAuthUser]  = useState(JSON.parse(localStorage.getItem("chat-user")) || null )

//   return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
// };
