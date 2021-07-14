import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(props: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{props.children}</>;
}

export default ScrollToTop;