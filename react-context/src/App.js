import React from "react";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  // Variavel Desestruturada
  const { setUser } = useAuth();

  return (
    <div className="App">
      <Profile />
      <hr/>
      <Login />
    </div>
  );
}

export default App;
