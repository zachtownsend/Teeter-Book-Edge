import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ISingleApplication } from "../types";
import parseLinkHeaders from "./parseLinkHeaders";

interface FetchApplicationsParams {
  page: number;
  limit: number;
}

const fetchApplications = async ({ page, limit }: FetchApplicationsParams) => {
  // TODO improve the url with new URL API
  const response = await fetch(
    `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  const data = await response.json();

  const linkHeader = response.headers.get("Link");
  let nextPage: number | undefined;

  if (linkHeader) {
    const links = parseLinkHeaders(linkHeader);

    const nextLink = links.find((l) => l.rel === "next");
    if (nextLink) {
      // Extract page number from URL
      const url = new URL(nextLink.url);
      nextPage = parseInt(url.searchParams.get("_page") || "");
    }
  } else {
    // Fallback: check if we got a full page
    const hasMore = data.length === limit;
    nextPage = hasMore ? page + 1 : undefined;
  }

  return {
    data,
    nextPage,
  };
};

const useApplications = ({ page, limit }: FetchApplicationsParams) => {
  return useInfiniteQuery<
    { data: ISingleApplication[]; nextPage?: number },
    Error,
    { pages: Array<{ data: ISingleApplication[]; nextPage?: number }> }
  >({
    queryKey: ["applications", String(page)],
    queryFn: ({ pageParam }) =>
      fetchApplications({ page: Number(pageParam), limit }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 21,
  });
};

export default useApplications;
