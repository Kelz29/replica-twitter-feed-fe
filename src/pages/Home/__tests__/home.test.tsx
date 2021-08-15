import HomePage from "../index";

describe("Home Page Test", () => {
  it("renders successfully", () => {
    expect(HomePage).toMatchSnapshot();
  });
});
