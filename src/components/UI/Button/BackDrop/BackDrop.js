import React from "react";
import classes from "./BackDrop.module.scss";

const BackDrop = props => {
  return (
    <div className={classes.BackDrop} onClick={props.onClick}></div>
  );
}

export default BackDrop;