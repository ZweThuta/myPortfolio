import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ClickSpark from "../utils/ClickSpark";
import SplashCursor from "../utils/SplashCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    </ClickSpark> */}
    {/* <SplashCursor /> */}
    <App />
  </StrictMode>
);
