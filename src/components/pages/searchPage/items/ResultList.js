import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";

function ResultList({ repositories, setRepository }) {
  const navigate = useNavigate();
  return (
    <List
      className="search__list"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      Results:
      {repositories.length > 0 ? (
        repositories.map((item) => {
          return (
            <ListItem
              className="list__item"
              key={item.id}
              onClick={() => {
                setRepository(item);
                navigate(`/details`, { replace: true });
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={item.owner.avatar_url} alt="avatar" width={40} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.full_name}
                secondary={item.description}
              />
            </ListItem>
          );
        })
      ) : (
        <>
          <br />
          Nothing found, try another query.
        </>
      )}
    </List>
  );
}

export default ResultList;
