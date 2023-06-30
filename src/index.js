import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StreamerPage from "./Pages/StreamerPage";
import StreamerRecordPage from "./Pages/StreamerRecordPage";
import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 20px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BodyContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StreamerPage />} />
          <Route
            path="/streamer-record-page"
            element={<StreamerRecordPage />}
          />
        </Routes>
      </BrowserRouter>
    </BodyContainer>
  </React.StrictMode>
);
