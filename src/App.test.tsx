import React from "react";
import { render } from "./test-utils";
import { App } from "./App";

describe("App", () => {
  it("should render app without crashing", () => {
    render(<App />);
  });
});
