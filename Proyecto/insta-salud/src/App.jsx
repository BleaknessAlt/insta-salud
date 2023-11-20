import { useState } from "react";
import "./index.css";
import InstaSaludNavbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <InstaSaludNavbar></InstaSaludNavbar>
        </>
    );
}

export default App;
