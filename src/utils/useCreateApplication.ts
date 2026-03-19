import { useMutation } from "@tanstack/react-query";
import { ISingleApplication } from "../types";

const useCreateApplication = () => {
  return useMutation({
      mutationFn: async (application: ISingleApplication) => {
          const tokenResponse = await fetch("http://localhost:3001/api/auth/xcsrftoken");
          const token = await tokenResponse.json();
          const csrfToken = token.xcsrftoken;

          return fetch("http://localhost:3001/api/applications", {
              method: "POST",
              body: JSON.stringify(application),
              headers: {
                  "Content-Type": "application/json",
                  "x-csrftoken": csrfToken,
              },
          });
      },
  });    
};

export default useCreateApplication;