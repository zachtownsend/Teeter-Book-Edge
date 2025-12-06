import "./App.css";
import Applications from "./Applications";
import Header from "./Header";
import { useState } from "react";
import useApplications from "./utils/useApplications";
import { PAGE_LIMIT } from "./consts";
import { Button } from "./ui/Button/Button";

function App() {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useApplications({
    page: page,
    limit: PAGE_LIMIT,
  });
  const applications = data?.pages.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    if (!isLoading && applications.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isLoading, applications.length]);

  return (
    <div className="App">
      <Header />
      <Applications applications={applications ?? []} />
      <div className="load-more-container">
        <Button
          className="load-more-button"
          disabled={isFetchingNextPage || !hasNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
}

export default App;
