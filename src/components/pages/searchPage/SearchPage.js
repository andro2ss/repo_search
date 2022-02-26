import React from "react";
import ContainedButton from "../../common/buttons/ContainedButton";
import InputSearch from "../../common/textField/InputSearch";
import getRepos from "../../../functions/getRepositories";
import LinearIndeterminate from "../../common/spinner/LinearIndeterminate";
import ResultList from "./items/ResultList";
import "./SearchPage.scss";

function SearchPage({
  repositories,
  setRepositories,
  setRepository,
  searchRepo,
  setSearchRepo,
  status,
  setStatus,
  setPageLocationHome,
}) {
  setPageLocationHome(true);
  return (
    <>
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchRepo.length >= 3) {
            setStatus(1);
          }
          getRepos(setRepositories, searchRepo, setStatus);
        }}
      >
        <InputSearch
          value={searchRepo}
          setValue={setSearchRepo}
          setStatus={setStatus}
        />
        <ContainedButton
          text={"Search"}
          onclick={(e) => {
            if (searchRepo.length >= 3) {
              setStatus(1);
            }

            getRepos(setRepositories, searchRepo, setStatus);
          }}
        />
      </form>
      {status === 1 ? <LinearIndeterminate /> : ""}
      {status === 2 ? (
        <ResultList repositories={repositories} setRepository={setRepository} />
      ) : (
        ""
      )}
    </>
  );
}

export default SearchPage;
