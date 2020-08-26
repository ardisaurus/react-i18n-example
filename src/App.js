import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
import Report from "./component/report";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <FormattedMessage id={"hello"} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id={"edit"}
              values={{ path: <code>src/App.js</code> }}
            />
            <hr />
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Report />
          <button
            onClick={() => {
              setLocale(LOCALES.ENGLISH);
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              setLocale(LOCALES.FRENCH);
            }}
          >
            French
          </button>
          <button
            onClick={() => {
              setLocale(LOCALES.GERMAN);
            }}
          >
            German
          </button>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
