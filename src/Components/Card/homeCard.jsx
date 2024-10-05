import Card from "../../Components/Card";
import olympics from "../../json/olympics.json";

function HomeCard({ countryOrPlace }) {
  return olympics.map((country, index) => {
    const evenFlexCard = index % 2 == 1 ? "comp:flex-row-reverse" : "";
    const evenFlexText = index % 2 == 1 ? " comp:justify-end" : "";
    return (
      <Card
        key={index}
        textCard={countryOrPlace(country.countryPlace, 1)}
        imageCard={`./images/countries/${country.acron}`}
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
  });
}
export default HomeCard;
