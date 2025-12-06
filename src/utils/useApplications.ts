import { useQuery } from "@tanstack/react-query";
import { ISingleApplication } from "../types";

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

  return response.json();
};

const useApplications = ({ page, limit }: FetchApplicationsParams) => {
  return useQuery<ISingleApplication[]>({
    queryKey: ["applications", page],
    queryFn: () => fetchApplications({ page, limit }),
  });
};

export default useApplications;
