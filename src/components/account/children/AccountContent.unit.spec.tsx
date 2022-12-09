import { render, screen } from "@testing-library/react";
import AccountContent from "./AccountContent";

const props = {
  mbti: "ISFJ",
};

const renderAccount = () => {
  return render(<AccountContent {...props} />);
};

describe("Account content test ", () => {
  it("render test ", () => {
    renderAccount();
    const mbti = screen.getByTestId("mbti-test");

    expect(mbti.textContent).toBe(props.mbti);
  });
});
