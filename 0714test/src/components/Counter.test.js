import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

it("Counter 컴포넌트 숫자 값 확인", () => {
  render(<Counter />);
  const initalState = screen.getByText("0");
  expect(initalState).toBeTruthy();
});
it("Counter 컴포넌트 증가버튼 확인", () => {
  render(<Counter />);
  const incrementBtn = screen.getByTestId("incrementBtn");
  fireEvent.click(incrementBtn);
  const upState = screen.getByText("1");
  expect(upState).toBeTruthy();
});
it("Counter 컴포넌트 감소버튼 확인", () => {
  render(<Counter />);
  const decrementBtn = screen.getByTestId("decrementBtn");
  fireEvent.click(decrementBtn);
  const downState = screen.getByText("-1");
  expect(downState).toBeTruthy();
});

