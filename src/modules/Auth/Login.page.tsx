import { Button, Heading, Image, Main, Markdown } from "grommet";
import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { ROUTES } from "../../router/routes";
import { useAuth } from "../../utils/auth";

export interface IProps {}

export const Login: FC<IProps> = () => {
  const handleLogin = () => {
    const baseUrl = process.env.REACT_APP_TRELLO_OAUTH_URL ?? "";
    const appKey = process.env.REACT_APP_TRELLO_KEY ?? "";
    const url = baseUrl.replace("__api_key__", appKey);

    window.location.href = url;
  };

  const location = useLocation();
  const auth = useAuth();
  const router = useHistory();

  useEffect(() => {
    if (location.hash) {
      const tk = location.hash.replace("#token=", "");
      auth.addToken(tk);
      router.replace(ROUTES.private.boards);
    }
  });

  return (
    <Main pad="large" justify="center" align="center">
      <Image src="/logo.png" />
      <Heading>Thumble</Heading>
      <Markdown>
        ## L'application de **suivi** de vos [trello](https://trello.com) sans
        sauvegarde de vos informations (*Nécessite ScrummerTheodo*)
      </Markdown>
      <Markdown>#### **Arrive bientôt dans sa première version**</Markdown>
      <Button
        primary
        label="Connexion avec Trello"
        onClick={handleLogin}
        style={{ width: 200 }}
      />
    </Main>
  );
};
