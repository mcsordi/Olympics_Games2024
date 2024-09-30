import { LuChevronDownSquare } from "react-icons/lu";
import { AiFillMinusSquare } from "react-icons/ai";
import { useContext } from "react";
import { Icon } from "../../context/context";

// eslint-disable-next-line react/prop-types
function ExpandAll({ cursor }) {
  const { expand, setExpand } = useContext(Icon);

  const minusIcon = (Icons) => {
    return (
      <Icons
        className={`hover:cursor-pointer ${cursor}`}
        onClick={() => {
          return expand == true ? setExpand(false) : setExpand(true);
        }}
      />
    );
  };
  const changeIcon =
    expand == true
      ? minusIcon(AiFillMinusSquare)
      : minusIcon(LuChevronDownSquare);

  return (
    <div
      className="w-11/12 px-1 flex justify-end text-2xl smart460:w-3/4
    smart460:px-2 700:px-0 comp:text-3xl comp:w-4/12 comp:mr-9"
    >
      {changeIcon}
    </div>
  );
}
export default ExpandAll;
