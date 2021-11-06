import React, { memo } from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// use router
import { useNavigate, useLocation } from "react-router-dom";

function Example(props) {
  let navigate = useNavigate();
  let location = useLocation();

  console.log(location);
  console.log(props);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text align="center" variant="h4" gutterBottom>
        Example Pages
      </Text>
      <Text align="center" gutterBottom>
        Get started by editing pages/Example.js
      </Text>
      <Box display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}

Example.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Example));
