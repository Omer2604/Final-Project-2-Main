import React, { useState } from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <button onClick={() => setUser({ name: "Sample User" })}>Set User</button>
      <button onClick={() => setUser(null)}>Remove User</button>
    </>
  );
};

export default App;
