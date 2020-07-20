import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import ISPs from "./ISPs";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <ISPs />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
