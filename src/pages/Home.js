import React, { memo } from "react";
import { connect } from "react-redux";
import Text from "@mui/material/Typography";

function Home(props) {
  return (
    <>
      <Text>HENLO</Text>
    </>
  );
}

Home.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
