import React from "react";
import classes from "./MenuToggle.module.scss";

const MenuToggle = props => {
  const cls = [classes.MenuToggle];

  if(props.isOpen) {
    cls.push(classes.open);
  }

  return (
    <div
      onClick={props.onToggle}
      className={cls.join(" ")}
    >
      Меню
    </div>
  );
}

export default MenuToggle;