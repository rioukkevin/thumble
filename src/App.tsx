import { Router } from "./router/Router.component";
import { AuthProvider } from "./utils/auth";
import { Grommet } from "grommet";
import { theme } from "./utils/theme";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div style={{ minHeight: "100vh", height: "100vh" }}>
      <Grommet theme={theme}>
        <CookiesProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </CookiesProvider>
      </Grommet>
    </div>
  );
}

export default App;
