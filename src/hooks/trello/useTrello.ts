import { useEffect, useState } from "react";
import { TrelloClient } from "trello.js";
import { useAuth } from "../../utils/auth";

export interface IProvide {
  trello: TrelloClient;
  token: string;
}

export const useTrello = (): IProvide => {
  const auth = useAuth();

  const [Trello, setTrello] = useState<TrelloClient>(
    new TrelloClient({ key: "", token: "" })
  );

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
