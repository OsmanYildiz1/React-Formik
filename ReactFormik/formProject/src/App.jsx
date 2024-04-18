import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<GeneralForm />} />
          <Route path="/portal" element={<PortalForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
