import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 다음의 코드로 <App />의 코드가 public/index.html에 있는 #root 안으로 innerHTML과 같은 효과로 들어갑니다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
