import React, { memo } from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home(props) {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <img width="350px" src="/vector/home.png" alt="vector" />
      <Text align="center" variant="h4" gutterBottom>
        Welcome to React Starterkit
      </Text>
      <Text align="center" gutterBottom>
        Get started by editing pages/Home.js
      </Text>
      <Box display="flex" justifyContent="center">
        <Button color="primary" variant="outlined">
          See Documentation
        </Button>
      </Box>
    </Box>
  );
}

Home.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
