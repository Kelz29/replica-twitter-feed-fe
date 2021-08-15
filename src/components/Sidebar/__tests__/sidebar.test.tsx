import SidebarWithHeader from "../index";

describe("Sidebar with header Test", () => {
  it("renders successfully", () => {
    expect(SidebarWithHeader).toMatchSnapshot();
  });
});
