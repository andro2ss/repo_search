import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import HideAppBar from "./components/common/appBar/AppBar";
import SearchPage from "./components/pages/searchPage/SearchPage";
import DetailsPage from "./components/pages/detailsPage/DetailsPage";
import { useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [repository, setRepository] = useState({});
  const [searchRepo, setSearchRepo] = useState("");
  const [status, setStatus] = useState(0);
  const [pageLocationHome, setPageLocationHome] = useState(true);

  return (
    <Container fixed className="main__container">
      <BrowserRouter>
        <HideAppBar pageLocationHome={pageLocationHome} />
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                repositories={repositories}
                setRepositories={setRepositories}
                setRepository={setRepository}
                searchRepo={searchRepo}
                setSearchRepo={setSearchRepo}
                status={status}
                setStatus={setStatus}
                setPageLocationHome={setPageLocationHome}
              />
            }
          />
          <Route
            path="/details"
            element={
              <DetailsPage
                repository={repository}
                setPageLocationHome={setPageLocationHome}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
