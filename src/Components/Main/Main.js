import React from "react";
import "./Main.scss";
import CountryInput from "../CountryInput/CountryInput";

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Smog Alert!</h1>
      </header>
      <main className="content">
        <CountryInput />
      </main>
    </React.Fragment>
  );
}

export default App;

/**
//*    TODO
//* Input validation (casing)
//* Parameter input  (pm,co, so)
//*
*/
