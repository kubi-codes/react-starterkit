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
      minWidth: "30vw",
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
      <img src="/vector/500.png" alt="something wrong" loading="lazy" />
      <Text variant="h4" gutterBottom>
        Something went wrong
      </Text>
      <Text gutterBottom>Looks like server failed to load yout request</Text>
      <Button variant="contained" onClick={loadPages}>
        Reload Pages
      </Button>
    </Box>
  );
}
