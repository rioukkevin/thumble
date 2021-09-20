export const ROUTES = {
  root: "/",
  public: {
    login: "/login",
  },
  private: {
    boards: "/boards",
    board: "/board/:id",
  },
};

type TRoot = keyof typeof ROUTES;
type TPublic = keyof typeof ROUTES.public;
type TPrivate = keyof typeof ROUTES.private;

export type TRoute = TRoot | TPublic | TPrivate;

export type IRouteParams = {
  private: {
    board: { id: string };
  };
};
