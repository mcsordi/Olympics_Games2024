import SlideCard from "../../Components/Card/athletesCard";

const medalMaterial = (medal) => {
  if (medal == "gold") {
    return "text-amber-500";
  } else if (medal == "silver") {
    return "text-slate-500";
  } else if (medal == "bronze") {
    return "text-orange-600";
  }
};

function Athletes() {
  return <SlideCard medalMaterial={medalMaterial} />;
}

export default Athletes;
