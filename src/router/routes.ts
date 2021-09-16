export const ROUTES = {
  root: "/",
  public: {
    login: "/login",
  },
  private: {
    boards: "/boards",
  },
};

type TRoot = keyof typeof ROUTES;
type TPublic = keyof typeof ROUTES.public;
type TPrivate = keyof typeof ROUTES.private;

export type TRoute = TRoot | TPublic | TPrivate;
