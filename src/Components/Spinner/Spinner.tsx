import * as React from "react";
import "./Spinner.scss";

type SpinnerProps = { className?: string };

function Spinner({ className }: SpinnerProps) {
  return <section className={`spinner ${className ? className : ""}`} />;
}

export default Spinner;
