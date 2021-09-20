import { useEffect, useState } from "react";
import { TrelloClient } from "trello.js";
import { useAuth } from "../../utils/auth";

export interface IProvide {
  trello: TrelloClient | null;
  token: string;
}

export const useTrello = (): IProvide => {
  const auth = useAuth();

  const [Trello, setTrello] = useState<TrelloClient | null>(null);

  useEffect(() => {
    if (auth.token) {
      setTrello(
        new TrelloClient({
          key: process.env.REACT_APP_TRELLO_KEY ?? "",
          token: auth.token,
          telemetry: false,
        })
      );
    }
  }, [auth, auth.token]);

  return {
    trello: Trello,
    token: auth.token ?? "",
  };
};
