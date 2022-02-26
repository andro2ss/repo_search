import React from "react";
import Divider from "@mui/material/Divider";
import "./DetailsPage.scss";

function DetailsPage({ repository, setPageLocationHome }) {
  setPageLocationHome(false);
  return (
    <div className="detailsPage__container">
      <h1>{repository.full_name}</h1>
      <div className="repository__box">
        <span className="repository__text--highlighted"> Name: </span>
        <span className="repository__text"> {repository.name} </span>
      </div>
      <Divider />
      <div className="repository__box">
        <span className="repository__text--highlighted"> Owner: </span>
        <span className="repository__text"> {repository.owner.login} </span>
      </div>
      <Divider />
      <div className="repository__box">
        <span className="repository__text--highlighted"> Description: </span>
        <span className="repository__text"> {repository.description} </span>
      </div>
      <Divider />
      <div className="repository__box">
        <span className="repository__text--highlighted"> Forks: </span>
        <span className="repository__text"> {repository.forks} </span>
      </div>
      <Divider />
      <div className="repository__box">
        <span className="repository__text--highlighted"> Watchers: </span>
        <span className="repository__text"> {repository.watchers} </span>
      </div>
      <Divider />
      <div className="repository__box">
        <span className="repository__text--highlighted"> Url: </span>
        <span className="repository__text">
          <a href={repository.html_url}>{repository.html_url}</a>{" "}
        </span>
      </div>
    </div>
  );
}

export default DetailsPage;
