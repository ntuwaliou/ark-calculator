import { useState } from 'react';
import './App.css';
import MainPanel from './Component/MainPanel'

function App() {
  const [language, setLanguage] = useState("ZH_TW")
  return (
    <div className="App">
      <MainPanel language={language}></MainPanel>
    </div>
  );
}

export default App;
