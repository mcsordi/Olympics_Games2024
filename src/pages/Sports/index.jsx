import Card from "../../Components/Card";
import sports from "../../json/games.json";
import { SportsList } from "../../sportsList";
import Medals from "../../Components/Medals";

import ExpandAll from "../../Components/ExpandAll";

function Sports() {
  const sortSport = sports.sort(
    (sportA, sportB) =>
      sportB.gold - sportA.gold ||
      sportB.silver - sportA.silver ||
      sportB.bronze - sportA.bronze
  );
  return (
    <section className="mt-20 w-full  comp:mt-0  h-full flex flex-col justify-center items-center">
      <ExpandAll />
      {SportsList.map((sport, idx) => (
        <Card
          hiddenCard={"w-full  smar460:w-4/5 comp:w-3/6 2xl:w-1/3  h-20"}
          flexImageCard={"h-16 w-16"}
          key={idx}
          textCard={sport}
          imageCard={`./images/logos/${sport.toLocaleUpperCase()}`}
          flexExpandIcons={`text-2xl`}
          flexTextCard={`flex text-sm flex-wrap max-w-12 smart460:text-lg smart460:max-w-full  
            smart460:flex-nowrap w-16 sm:text-xl comp:max-w-full`}
          displayMedal={`hidden`}
        >
          <div
            className="rounded flex pt-5 mb-6 border-y-black  smart460:border-y-primary-700 
             items-center smart460:p-2 smart460:w-4/5 comp:w-3/6 2xl:w-1/3 h-full flex-col comp:p-2
           border-primary-700 border"
          >
            {
              <Medals
                display={`flex w-10/12 gap-1 smartPhone:gap-3 smartPhone:w-11/12 smartPhone:px-2
                  smart460:w-10/12 smart460:px-0 sm:w-5/6 sm:gap-4 sm:ml-4 md:gap-5 md:ml-8
                  py-1  items-center justify-end `}
              />
            }
            {sortSport.map((country, index) =>
              country.sport.toLocaleUpperCase() == sport.toLocaleUpperCase() ? (
                <Card
                  key={index}
                  displayCard={``}
                  hiddenCard={`min-w-full mt-0`}
                  flexTextCard={`hidden comp:flex`}
                  flexAlias={`sm:hidden`}
                  textCard={country.nameCountry}
                  alias={country.country}
                  imageCard={`./images/countries/${country.country}`}
                  configICon={`hidden`}
                  gold={country.gold}
                  silver={country.silver}
                  bronze={country.bronze}
                  total={country.total}
                  displayMedal={`hidden`}
                />
              ) : (
                ""
              )
            )}
          </div>
        </Card>
      ))}
    </section>
  );
}
export default Sports;
