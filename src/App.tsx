import React from 'react';
import {Wall} from "./components/framework-interface/Wall";
import Card from "./components/framework-interface/Card";

const App: React.FC = () => {
  return (
    <Wall>
      <Card />
    </Wall>
  );
};

export default App;
