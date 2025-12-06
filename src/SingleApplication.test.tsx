import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SingleApplication from "./SingleApplication";
import { ISingleApplication } from "./types";

const mockApplication: ISingleApplication = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  loan_amount: 50000,
  loan_type: "Business Loan",
  email: "john.doe@example.com",
  company: "Example Corp",
  date_created: "2024-01-15",
  expiry_date: "2024-12-31",
  avatar: "",
  loan_history: [],
};

describe("SingleApplication", () => {
  it("should render company name", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Example Corp")).toBeInTheDocument();
  });

  it("should render company label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  it("should render full name", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("should render name label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("should render email as a link", () => {
    render(<SingleApplication application={mockApplication} />);
    const emailLink = screen.getByRole("link", {
      name: "john.doe@example.com",
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:john.doe@example.com");
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render email label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("should render formatted loan amount", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("£50,000.00")).toBeInTheDocument();
  });

  it("should render loan amount label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Loan Amount")).toBeInTheDocument();
  });

  it("should render formatted application date", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("15-01-2024")).toBeInTheDocument();
  });

  it("should render application date label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Application Date")).toBeInTheDocument();
  });

  it("should render formatted expiry date", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("31-12-2024")).toBeInTheDocument();
  });

  it("should render expiry date label", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Expiry date")).toBeInTheDocument();
  });

  it("should render all required fields for different application data", () => {
    const differentApplication: ISingleApplication = {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      loan_amount: 75000,
      loan_type: "Flexi-Loan",
      email: "jane.smith@example.com",
      company: "Test Inc",
      date_created: "2024-02-20",
      expiry_date: "2024-11-30",
      avatar: "",
      loan_history: [],
    };
    render(<SingleApplication application={differentApplication} />);

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Test Inc")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "jane.smith@example.com" })
    ).toBeInTheDocument();
    expect(screen.getByText("£75,000.00")).toBeInTheDocument();
    expect(screen.getByText("20-02-2024")).toBeInTheDocument();
    expect(screen.getByText("30-11-2024")).toBeInTheDocument();
  });
});
