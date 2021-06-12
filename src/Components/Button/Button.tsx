import * as React from "react";
import "./Button.scss";
import { ReactNode } from "react";

export interface IProps {
  className?: string;
  title?: string | ReactNode;
  loading?: boolean;
  type: "submit" | "button" | "reset";
  icon?: string;
  onClick?: (e: any) => void;
}

function Button(props: IProps) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.icon && <img src={props.icon} alt="icon-button" />}
      {props.loading ? "...loading" : <span>{props.title}</span>}
    </button>
  );
}

export default Button;
