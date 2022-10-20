import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("sgsdhs", () => {
  describe("dhsdj", () => {
    test("sdhd", () => {
      const KeyboardProps = {
        action: () => {},
      };

      render(<Keyboard action={KeyboardProps.action} />);
      const keysElements = screen.queryAllByRole("button");

      expect(keysElements.length).toBe(11);
    });
  });
});
