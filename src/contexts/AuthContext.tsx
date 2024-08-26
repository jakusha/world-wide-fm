import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface LoginTypes {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
}

const defaultLoginContext: LoginTypes = {
    isSignedIn: false,
    setIsSignedIn: () => {}, // No-op function
  };

const LoginInfo = createContext<LoginTypes>(defaultLoginContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  return (
    <LoginInfo.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </LoginInfo.Provider>
  );
};

export { LoginInfo, AuthProvider };
