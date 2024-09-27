import { FaMedal } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Medals({ display }) {
  return (
    <div className={`  ${display}`}>
      <FaMedal className="text-amber-500" />
      <FaMedal className=" text-slate-600" />
      <FaMedal className="text-orange-700" />
      <div className="flex items-end justify-center gap-0">
        <FaMedal className="text-amber-500 absolute" />
        <FaMedal className=" text-slate-600" />
        <FaMedal className="text-orange-700" />
      </div>
    </div>
  );
}
export default Medals;
