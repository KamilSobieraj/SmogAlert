import React from "react";
import "./Main.scss";
import Form from "../Form/Form";

const main = () => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Smog Alert!</h1>
      </header>
      <main className="content">
        <Form />
      </main>
    </React.Fragment>
  );
};

export default main;

/**
//*    TODO
//* Input validation (casing)
//* Parameter input  (pm,co, so)
//*
*/
