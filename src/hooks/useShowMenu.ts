import { RefObject, useEffect } from "react";

function useShowMenu(hamburger: RefObject<unknown>, menu: RefObject<unknown>) {
  // @ts-ignore

  const ButtonEvent = () => {
    // @ts-ignore
    hamburger.current.classList.toggle("active");
    // @ts-ignore
    const menuElement = menu && menu.current;
    if (menuElement) {
      console.log("menuElement", menuElement);
      // @ts-ignore
      menuElement.classList.toggle("open");
    }
  };

  useEffect(() => {
    // @ts-ignore
    const element = hamburger && hamburger.current;

    if (element) {
      // @ts-ignore
      element.addEventListener("click", ButtonEvent);
    }
    return () => {
      if (element) {
        // @ts-ignore
        element.removeEventListener("click", ButtonEvent);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [hamburger, menu];
}

export default useShowMenu;
