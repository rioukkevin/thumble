import { Router } from "./router/Router.component";
import { AuthProvider } from "./utils/auth";

function App() {
  return (
    <div style={{ minHeight: "100vh", height: "100vh" }}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
