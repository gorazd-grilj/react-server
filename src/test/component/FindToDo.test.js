import React from "react";
import { fireEvent, render } from "@testing-library/react";
import FindToDo from "../../component/FindToDo";

describe("test FindToDo component", () => {
  describe("with valid inputs", () => {
    it("form should be submited", () => {
      const mockOnSubmit = jest.fn();
      const { getByRole } = render(<FindToDo onSubmit={mockOnSubmit} />);
      fireEvent.click(getByRole("button"));
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
