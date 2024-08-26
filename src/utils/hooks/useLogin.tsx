import { useContext } from "react";
import { LoginInfo } from "src/contexts/AuthContext";

const useLogin = () => {
  const context = useContext(LoginInfo);
  return context;
};

export default useLogin;
