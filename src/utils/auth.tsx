import { createContext, FC, useContext, useState } from "react";

interface IContext {
  token: string | null;
  addToken: (token: string) => void;
  deleteToken: () => void;
}

export const AuthContext = createContext<IContext>({
  token: null,
  addToken: () => {},
  deleteToken: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  const addToken = (newToken: string) => {
    setToken(newToken);
  };

  const deleteToken = () => {
    setToken(null);
  };

  return {
    token,
    addToken,
    deleteToken,
  };
};

// http://localhost:3000/login#token=d0fee3321fd191008f37aa49c469f0439a94cf5e43f9203ccd160398739decfd

interface IProviderProps {}

export const AuthProvider: FC<IProviderProps> = (props) => {
  const providedAuth = useProvideAuth();
  return (
    <AuthContext.Provider value={providedAuth}>
      {props.children}
    </AuthContext.Provider>
  );
};
