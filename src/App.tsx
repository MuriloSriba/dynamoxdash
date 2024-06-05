import "../node_modules/react-vis/dist/style.css";
import React from "react";
import Graph from "./components/charts/Charts";
import Graph2 from "./components/charts/Charts2";
import Graph3 from "./components/charts/Charts3";
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Graph />
      <Graph2 />
      <Graph3 />
    </div>
  );
};

export default App;
