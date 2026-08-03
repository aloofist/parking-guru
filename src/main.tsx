import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import {
  Welcome,
  Scan,
  Start,
  ChargingSession,
  PaymentDetails,
  PaymentConfirmation,
} from "./search_carpark";
import SearchCarparkLayout from "./search_carpark/SearchCarparkLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}

        <Route element={<SearchCarparkLayout/>}>
          <Route path="/" element={<Welcome />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/start" element={<Start />} />
          <Route
            path="/charging_session"
            element={<ChargingSession />}
          />
          <Route path="/payment_details" element={<PaymentDetails />} />
          <Route
            path="/payment_confirmation"
            element={<PaymentConfirmation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
