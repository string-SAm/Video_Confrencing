import { StrictMode } from "react";
import ReactDom from "react-dom";
import { HMSRoomProvider, HMSThemeProvider } from "@100mslive/hms-video-react";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <HMSRoomProvider>
      <HMSThemeProvider appBuilder={{ theme: "dark" }}>
        <App />
      </HMSThemeProvider>
    </HMSRoomProvider>
  </StrictMode>,
  rootElement
);
