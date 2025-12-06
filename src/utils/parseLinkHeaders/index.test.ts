import { describe, it, expect } from "vitest";
import parseLinkHeaders from "./index";

describe("parseLinkHeaders", () => {
  it("should parse a single link header", () => {
    const linkHeader =
      '<http://localhost:3001/api/applications?_page=2&_limit=10>; rel="next"';
    const result = parseLinkHeaders(linkHeader);

    expect(result).toEqual([
      {
        url: "http://localhost:3001/api/applications?_page=2&_limit=10",
        rel: "next",
      },
    ]);
  });

  it("should parse multiple link headers", () => {
    const linkHeader =
      '<http://localhost:3001/api/applications?_page=2&_limit=10>; rel="next", <http://localhost:3001/api/applications?_page=1&_limit=10>; rel="prev"';
    const result = parseLinkHeaders(linkHeader);

    expect(result).toEqual([
      {
        url: "http://localhost:3001/api/applications?_page=2&_limit=10",
        rel: "next",
      },
      {
        url: "http://localhost:3001/api/applications?_page=1&_limit=10",
        rel: "prev",
      },
    ]);
  });

  it("should parse link headers with first, last, prev, and next", () => {
    const linkHeader =
      '<http://localhost:3001/api/applications?_page=1&_limit=10>; rel="first", <http://localhost:3001/api/applications?_page=5&_limit=10>; rel="last", <http://localhost:3001/api/applications?_page=4&_limit=10>; rel="prev", <http://localhost:3001/api/applications?_page=6&_limit=10>; rel="next"';
    const result = parseLinkHeaders(linkHeader);

    expect(result).toEqual([
      {
        url: "http://localhost:3001/api/applications?_page=1&_limit=10",
        rel: "first",
      },
      {
        url: "http://localhost:3001/api/applications?_page=5&_limit=10",
        rel: "last",
      },
      {
        url: "http://localhost:3001/api/applications?_page=4&_limit=10",
        rel: "prev",
      },
      {
        url: "http://localhost:3001/api/applications?_page=6&_limit=10",
        rel: "next",
      },
    ]);
  });

  it("should throw error for empty string (malformed header)", () => {
    // Empty strings will cause errors as the function expects well-formed Link headers
    // In practice, this function should only be called when linkHeader exists and is not empty
    expect(() => parseLinkHeaders("")).toThrow();
  });
});
