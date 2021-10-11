import React from "react";
import Box from "@mui/material/Box";
import Text from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      minWidth: "350px",
      width: "30%",
      height: "40vh",
      display: "block",
    },
  },
});

export default function Main() {
  const classes = useStyles();

  const loadPages = () => {
    window.history.back();
  };
  return (
    <Box className={classes.root}>
      <img src="/vector/404.png" alt="Page not found" loading="lazy" />
      <Text variant="h4" gutterBottom>
        Page Not Found
      </Text>
      <Text gutterBottom>
        We can't seem to find the pages you're looking for.
      </Text>
      <Button variant="contained" size="small" onClick={loadPages}>
        Go Back
      </Button>
    </Box>
  );
}
