import Card from "../../Components/Card";
import LineUpMedal from "../../Components/LineUpMedal";
import olympics from "../../json/olympics.json";

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
      {olympics.map((country, index) => {
        const evenFlexCard = index % 2 == 1 ? "comp:flex-row-reverse" : "";
        const evenFlexText = index % 2 == 1 ? " comp:justify-end" : "";
        return (
          <Card
            key={index}
            textCard={countryOrPlace(country.countryPlace, 1)}
            imageCard={`../../../src/images/countries/${country.acron}`}
            countryPlace={`${countryOrPlace(country.countryPlace, 0)}`}
            flexPlace={`flex`}
            flexTextCard={`${evenFlexText} hidden`}
            flexAlias={`sm:hidden comp:hidden`}
            displayCard={evenFlexCard}
            flexExpandIcons={`hidden`}
            gold={country.gold}
            silver={country.silver}
            bronze={country.bronze}
            total={country.total}
            flexMedals={`${evenFlexCard}`}
            alias={country.acron}
            flexWrap={`flex-wrap text-wrap`}
            displayMedal={`hidden`}
          />
        );
      })}
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
