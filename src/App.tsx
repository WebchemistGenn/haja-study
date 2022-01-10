import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "./Form";
import NojQuery from "./NojQuery";

// 페이지 이동 구현
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/no-jquery" element={<NojQuery />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Navigate replace to="/no-jquery" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
