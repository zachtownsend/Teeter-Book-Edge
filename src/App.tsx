import "./App.css";
import Applications from "./Applications";
import Header from "./Header";
import { useState } from "react";
import useApplications from "./utils/useApplications";
import { PAGE_LIMIT } from "./consts";

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useApplications({
    page,
    limit: PAGE_LIMIT,
  });

  return (
    <div className="App">
      <Header />
      <Applications applications={data ?? []} />
    </div>
  );
}

export default App;
