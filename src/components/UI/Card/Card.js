import React, { useContext } from "react";
import Button from "../Button/Button";
import classes from "./Card.module.css";

import AuthContext from "../../../store/auth-context";

const Card = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
      {ctx.isLoggedIn && <Button onClick={props.onLogout}>Logout</Button>}
    </div>
  );
};

export default Card;
