// import Card from "../../Components/Card";
import Card from "../../Components/Card";
import HomeCard from "../../Components/Card/homeCard";
import LineUpMedal from "../../Components/LineUpMedal";
// import olympics from "../../json/olympics.json";

function Home() {
  const countryOrPlace = (element, position) => {
    return element.split("-")[position];
  };
  return (
    <div
      className="  mb-3 mt-28 h-full w-full flex-row items-center justify-center 
   flex flex-wrap comp:flex-row comp:mt-8"
    >
      <LineUpMedal display={"flex"} />
      <HomeCard countryOrPlace={countryOrPlace} />
      <Card
        flexImageCard={`hidden`}
        flexExpandIcons={`hidden`}
        hiddenCard={"hidden comp:flex border-0 comp:bg-primary-100"}
        displayMedal={`hidden`}
      />
    </div>
  );
}
export default Home;
