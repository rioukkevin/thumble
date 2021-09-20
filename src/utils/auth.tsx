import { createContext, FC, useContext, useState } from "react";

const HOUR_TIMESTAMP = 3600000;

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
  const decodedSplitedCookies = decodeURIComponent(document.cookie).split("=");
  const tokenPosition =
    decodedSplitedCookies.findIndex((v) => v === "token") + 1;
  const tokenInCookies =
    tokenPosition === 0
      ? null
      : decodedSplitedCookies[tokenPosition].split(";")[0];

  if (tokenInCookies) console.log("Already Connected");

  const [token, setToken] = useState<string | null>(tokenInCookies);

  const addToken = (newToken: string) => {
    setToken(newToken);
    console.log("Connected");
    document.cookie = `token=${newToken};expires=${new Date(
      new Date().getTime() + 6 * HOUR_TIMESTAMP
    )};path=/`;
  };

  const deleteToken = () => {
    setToken(null);
    document.cookie = `token=${null};expires=${new Date(
      new Date().getTime() - HOUR_TIMESTAMP
    )};path=/`;
    console.log("Disconnected");
  };

  return {
    token,
    addToken,
    deleteToken,
  };
};

interface IProviderProps {}

export const AuthProvider: FC<IProviderProps> = (props) => {
  const providedAuth = useProvideAuth();
  return (
    <AuthContext.Provider value={providedAuth}>
      {props.children}
    </AuthContext.Provider>
  );
};
