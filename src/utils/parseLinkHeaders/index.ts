const parseLinkHeaders = (linkHeader: string) => {
  try {
    const links = linkHeader.split(",").map((link) => {
      const [url, rel] = link.split(";");
      return {
        url: url.trim().slice(1, -1),
        rel: rel.trim().split("=")[1].slice(1, -1),
      };
    });

    return links;
  } catch (error) {
    throw new Error("Invalid link header", {
      cause: error,
    });
  }
};

export default parseLinkHeaders;
