import countries from "../../json/olympics.json";
import Card from "../../Components/Card";
import LineUpMedal from "../../Components/LineUpMedal";
function Home() {
  return (
    <div
      className="my-10 mt-28 h-full w-full flex-row items-center justify-center 
   flex flex-wrap comp:flex-row comp:mt-8"
    >
      <LineUpMedal display={"flex"} />
      {countries.map((el, idx) => {
        const nameCountries = el.countryPlace.split("-");
        const margin = idx % 2 == 0 ? "comp:ml-10" : "comp:mr-10";
        const marginText = idx % 2 == 0 ? "comp:ml-20" : "comp:mr-20";
        const justify =
          idx % 2 == 0 ? "comp:justify-start" : "comp:justify-end";
        const disp = idx % 2 == 0 ? "comp:flex-row" : "comp:flex-row-reverse";
        const medals = idx % 2 == 0 ? "comp:flex-row" : "comp:flex-row-reverse";
        return (
          <Card
            key={idx}
            nameCountry={nameCountries[1]}
            country={el.acron}
            place={nameCountries[0]}
            gold={el.gold}
            silver={el.silver}
            bronze={el.bronze}
            total={el.total}
            alias={el.acron}
            display={disp}
            margin={margin}
            textMargin={marginText}
            justify={justify}
            medals={medals}
          />
        );
      })}
      <Card
        hidden={"comp:bg-primary-100 border-0 hidden comp:flex"}
        margin={"hidden"}
      />
    </div>
  );
}
export default Home;
