import { render, screen } from "@testing-library/react";
import AccountHeader from "./AccountHeader";

const props = {
  name: "jsKim",
};

const renderAccount = () => {
  return render(<AccountHeader {...props} />);
};

describe("Account header test ", () => {
  it("render test ", () => {
    renderAccount();
    const name = screen.getByTestId("name-test");

    expect(name.textContent).toBe(props.name);
  });
});
