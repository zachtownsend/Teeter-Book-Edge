import { describe, it, expect } from "vitest";
import formatCurrency from "./index";

describe("formatCurrency", () => {
  it("should format a positive integer amount as GBP", () => {
    const result = formatCurrency(1000);

    expect(result).toBe("£1,000.00");
  });

  it("should format a decimal amount as GBP", () => {
    const result = formatCurrency(1234.56);

    expect(result).toBe("£1,234.56");
  });

  it("should format zero as GBP", () => {
    const result = formatCurrency(0);

    expect(result).toBe("£0.00");
  });

  it("should format negative amounts as GBP", () => {
    const result = formatCurrency(-500);

    expect(result).toBe("-£500.00");
  });

  it("should format large amounts with thousand separators", () => {
    const result1 = formatCurrency(1000000);
    const result2 = formatCurrency(1234567.89);

    expect(result1).toBe("£1,000,000.00");
    expect(result2).toBe("£1,234,567.89");
  });

  it("should format small decimal amounts", () => {
    const result1 = formatCurrency(0.01);
    const result2 = formatCurrency(0.99);

    expect(result1).toBe("£0.01");
    expect(result2).toBe("£0.99");
  });

  it("should format amounts with many decimal places", () => {
    const result = formatCurrency(100.999);

    // Intl.NumberFormat rounds to 2 decimal places
    expect(result).toBe("£101.00");
  });

  it("should format amounts less than one pound", () => {
    const result = formatCurrency(0.5);

    expect(result).toBe("£0.50");
  });
});

