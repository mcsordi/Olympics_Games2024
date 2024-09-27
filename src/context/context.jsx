import { createContext, useContext, useState } from "react";
import { AiFillMinusSquare } from "react-icons/ai";
import { LuChevronDownSquare } from "react-icons/lu";

export const Icon = createContext();

Icon.displayName = "ContextProvider";

// eslint-disable-next-line react/prop-types
export default function IconContext({ children }) {
  const [expand, setExpand] = useState(false);
  return (
    <Icon.Provider value={{ expand, setExpand }}>{children}</Icon.Provider>
  );
}

export function TurnOnIcons() {
  const { expand } = useContext(Icon);
  const [showIcon, setShowIcon] = useState(false);
  const useIcon = (configICon) => {
    return showIcon == true || expand == true ? (
      <AiFillMinusSquare
        onClick={(evt) => {
          evt.target ? setShowIcon(false) : setShowIcon(true);
        }}
        className={`${configICon}`}
      />
    ) : (
      <LuChevronDownSquare
        onClick={(evt) => {
          evt.target ? setShowIcon(true) : setShowIcon(false);
        }}
        className={`${configICon}`}
      />
    );
  };
  return {
    expand,
    useIcon,
    showIcon,
  };
}
