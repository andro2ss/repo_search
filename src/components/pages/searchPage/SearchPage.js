import React, { useState } from "react";
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
  const [validationError, setValidationError] = useState(false);
  const [validationErrorText, setValidationErrorText] = useState("");
  setPageLocationHome(true);

  function handleSubmit() {
    if (searchRepo.length < 3) {
      setValidationError(true);
      setValidationErrorText("Field requires a min 3 symbols");
    } else {
      setStatus(1);
      setValidationError(false);
      setValidationErrorText("");
      getRepos(setRepositories, searchRepo, setStatus);
    }
  }

  return (
    <>
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputSearch
          value={searchRepo}
          setValue={setSearchRepo}
          setStatus={setStatus}
          validationError={validationError}
          helperText={validationErrorText}
        />
        <ContainedButton
          text={"Search"}
          onclick={(e) => {
            handleSubmit();
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
