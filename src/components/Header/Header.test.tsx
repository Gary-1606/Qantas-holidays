import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { routes } from "./../../constants";

// Mock next/image since it's not available in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: string;
    height: string;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  it("renders the Qantas logo with correct attributes", () => {
    render(<Header />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", routes.base);

    const logoImage = screen.getByAltText("Qantas");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("width", "219");
    expect(logoImage).toHaveAttribute("height", "45");
    expect(logoImage).toHaveAttribute("src", "/next/images/logo.png");
  });
});
