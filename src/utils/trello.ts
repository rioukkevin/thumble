import { Config, TrelloClient } from "trello.js";

// Local config without auth
const config: Config = {
  key: process.env.REACT_APP_TRELLO_KEY as string,
  token: process.env.REACT_APP_TRELLO_TOKEN as string,
  telemetry: false,
};

// config with auth

export const Trello = new TrelloClient(config);
