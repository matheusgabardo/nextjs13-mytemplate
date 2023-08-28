import Home from "../../app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Calculator", () => {
    it("renders a calculator", () => {
      render(<Home />);
      
      const text = screen.getByText("nextjs13-mytemplate")

      expect(text).toBeInTheDocument();
    });
  });
  