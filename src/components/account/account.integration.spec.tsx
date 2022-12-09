import { render } from "@testing-library/react";
import Account from "./Account";

const props = {
  name: "jsKim",
  mbti: "ISFJ",
};

const renderAccount = () => {
  return render(<Account {...props} />);
};

describe("Account integration test ", () => {
  it("render test ", () => {
    const { container } = renderAccount();

    expect(container).toMatchSnapshot();
  });
});
