import React from 'react';
import './App.css';
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";

const App: React.FC = () => {
  return (
    <div>
        <ApplicationHeader title={"Lobby"} />
    </div>
  );
};

export default App;
