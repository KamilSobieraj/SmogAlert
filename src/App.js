import React from "react";
import "./App.css";
import CountryInput from "./Components/CountryInput/CountryInput";

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Smog Alert!</h1>
      </header>
      <main>
        <CountryInput />
      </main>
    </React.Fragment>
  );
}

export default App;
