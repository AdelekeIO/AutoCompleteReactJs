import React from "react";
import "./App.css";
import HideableText from "./HideableText";
import AutoCompleteText from "./component/AutoCompleteText";
import countries from "./component/countries";

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <div className="App-Component">
          <AutoCompleteText items={countries} />
        </div>
      </div>
      <div>hhsfohfd s fobkfbsb</div>
    </div>
  );
}

export default App;
