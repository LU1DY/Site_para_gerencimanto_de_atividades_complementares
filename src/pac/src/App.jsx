import { useState } from "react";
import Dashboard from "./components/pages/dashboard";
import Sidebar from "./components/components/sidebar";
import Navbar from "./components/components/navbar";

function App() {
  return (
    <div className="container-main">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div id="main">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
