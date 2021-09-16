import { Router } from "./router/Router.component";
import { AuthProvider } from "./utils/auth";
import { Grommet } from "grommet";
import { theme } from "./utils/theme";

function App() {
  return (
    <div style={{ minHeight: "100vh", height: "100vh" }}>
      <Grommet theme={theme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </Grommet>
    </div>
  );
}

export default App;
