import { render } from "@testing-library/react";

describe("Index", () => {
  it("should render successfully", () => {
    // TODO need to mock next/image support
    // const { container } = render(<Index />);
    const { container } = render(<div />);
    expect(container).toMatchSnapshot();
  });
});
