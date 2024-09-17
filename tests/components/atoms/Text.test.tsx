import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../../../src/components/atoms/Text";
import { Typography } from "@mui/material";

jest.mock("@mui/material", () => ({
  Typography: jest.fn().mockImplementation(({ children }) => <>{children}</>),
}));

describe("Text component", () => {
  const defaultProps = {
    variant: "body1" as const,
    align: "inherit" as const,
    color: "textPrimary" as const,
    gutterBottom: false,
    noWrap: false,
    children: "Test text",
  };

  beforeEach(() => {
    (Typography as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children correctly", () => {
    render(<Text {...defaultProps} />);
    expect(screen.getByText("Test text")).toBeInTheDocument();
  });

  it("should pass the correct variant prop to Typography", () => {
    render(<Text {...defaultProps} variant="h1" />);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({ variant: "h1" }),
      expect.anything()
    );
  });

  it("should pass the correct align prop to Typography", () => {
    render(<Text {...defaultProps} align="center" />);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({ align: "center" }),
      expect.anything()
    );
  });

  it("should pass the correct color prop to Typography", () => {
    render(<Text {...defaultProps} color="secondary" />);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({ color: "secondary" }),
      expect.anything()
    );
  });

  it("should pass the gutterBottom prop to Typography", () => {
    render(<Text {...defaultProps} gutterBottom={true} />);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({ gutterBottom: true }),
      expect.anything()
    );
  });

  it("should pass the noWrap prop to Typography", () => {
    render(<Text {...defaultProps} noWrap={true} />);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({ noWrap: true }),
      expect.anything()
    );
  });

  it("should use default values when no props are provided", () => {
    render(<Text variant="body1">Default Text</Text>);
    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({
        align: "inherit",
        color: "textPrimary",
        gutterBottom: false,
        noWrap: false,
      }),
      expect.anything()
    );
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });
});
