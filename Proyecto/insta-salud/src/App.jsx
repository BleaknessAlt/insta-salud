import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InstaSaludNavbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InstaSaludNavbar></InstaSaludNavbar>

    </>
  );
}

export default App;
