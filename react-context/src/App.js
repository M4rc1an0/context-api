import React from "react";
import Profile from "./components/profile";
import { AuthContext } from "./providers/auth";

function App() {
  // Variavel Desestruturada
  const { user, setUser } = React.useContext(AuthContext) 

  console.log(user)
  return (
    <div className="App">
      <h1>Ola mundo !!</h1>
      <input type="text" onChange={(e) => setUser({name: e.target.value})}/>
      <Profile />
    </div>
  );
}

export default App;
