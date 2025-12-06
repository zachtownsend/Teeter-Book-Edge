import { describe, it, expect } from "vitest";
import formatDate from "./index";

describe("formatDate", () => {
  it("should format a date in DD-MM-YYYY format", () => {
    const date = new Date(2024, 0, 15); // January 15, 2024
    const result = formatDate(date);

    expect(result).toBe("15-01-2024");
  });

  it("should format a date with single digit day and month", () => {
    const date = new Date(2024, 2, 5); // March 5, 2024
    const result = formatDate(date);

    expect(result).toBe("05-03-2024");
  });

  it("should format the first day of the year", () => {
    const date = new Date(2024, 0, 1); // January 1, 2024
    const result = formatDate(date);

    expect(result).toBe("01-01-2024");
  });

  it("should format the last day of the year", () => {
    const date = new Date(2024, 11, 31); // December 31, 2024
    const result = formatDate(date);

    expect(result).toBe("31-12-2024");
  });

  it("should format dates in different months", () => {
    const date1 = new Date(2024, 5, 20); // June 20, 2024
    const date2 = new Date(2024, 8, 10); // September 10, 2024

    expect(formatDate(date1)).toBe("20-06-2024");
    expect(formatDate(date2)).toBe("10-09-2024");
  });

  it("should format dates in different years", () => {
    const date1 = new Date(2023, 5, 15);
    const date2 = new Date(2025, 5, 15);

    expect(formatDate(date1)).toBe("15-06-2023");
    expect(formatDate(date2)).toBe("15-06-2025");
  });

  it("should replace slashes with dashes", () => {
    const date = new Date(2024, 0, 15);
    const result = formatDate(date);

    // Ensure no slashes are present
    expect(result).not.toContain("/");
    expect(result).toContain("-");
  });
});

