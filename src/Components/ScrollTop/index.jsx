import { FaArrowAltCircleUp } from "react-icons/fa";
function ScrollTop() {
  return (
    <div className=" text-3xl block right-0 bottom-0 fixed p-3">
      <FaArrowAltCircleUp
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        className="text-red-500 hover:cursor-pointer"
      />
    </div>
  );
}
export default ScrollTop;
