import React, { memo } from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <>
      <h1>HENLO</h1>
    </>
  );
}

Home.propTypes = {};

const mapStateToProps = (state) => ({
  example: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
