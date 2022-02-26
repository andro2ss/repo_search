import Button from "@mui/material/Button";
import * as React from "react";

export default function ContainedButton({ text, onclick, classNames }) {
  return (
    <Button variant="contained" className={classNames} onClick={onclick}>
      {text}
    </Button>
  );
}
