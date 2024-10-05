import { SportsList } from "../../sportsList";
import Card from "../../Components/Card";
import Slider from "react-slick";
import athletes from "../../json/athletes.json";
import { useState } from "react";

const sliderSetting = (setIndexCard) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (oldIndex, newIndex) => {
      setIndexCard(newIndex);
    },
  };
  return settings;
};
// eslint-disable-next-line react/prop-types
function SlideCard({ medalMaterial }) {
  const [indexCard, setIndexCard] = useState(0);

  return (
    <>
      <div className=" w-10/12 md:w-4/5 900:w-8/12 xl:w-6/12  lg:w-7/12 comp:w-7/12 2xl:w-4/12  absolute top-20 comp:top-24 ">
        <Slider {...sliderSetting(setIndexCard)}>
          {SportsList.map((sport, index) => {
            return (
              <Card
                hiddenCard={`px-0 mP:w-full  sm:w-11/12 comp:w-11/12 h-24`}
                flexImageCard={`w-20 h-20`}
                displayCard={`min-w-8/12`}
                key={index}
                textCard={sport}
                flexTextCard={`items-center justify-center flex w-full text-sm sm:text-xl comp:text-xl`}
                configICon={`hidden`}
                imageCard={`./images/logos/${sport.toLocaleUpperCase()}`}
                displayMedal={`hidden`}
              />
            );
          })}
        </Slider>
      </div>
      <AthleteCard indexCard={indexCard} medalMaterial={medalMaterial} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function AthleteCard({ indexCard, medalMaterial }) {
  const filterCard = SportsList.filter((sport, idx) =>
    indexCard == idx ? sport : ""
  );
  return (
    <div className="mt-48 comp:mt-24  w-11/12 md:w-4/5 900:w-8/12 xl:w-6/12  lg:w-7/12 comp:w-7/12 2xl:w-4/12 min-h-full flex-col  items-center justify-center flex">
      {athletes.map((athlete, index) =>
        athlete.upperSport == filterCard.toString().toUpperCase() ? (
          <Card
            key={index}
            hiddenCard={`h-24 mP:min-w-full min-h-20  700:h-20 comp:w-10/12`}
            textCard={athlete.category}
            flexTextCard={`w-12 text-sm 850:text-base`}
            imageCard={`./images/countries/${athlete.county}`}
            configICon={`hidden`}
            flexAlias={"text-neutral-500 gap-0 flex text-sm 850:text-base "}
            alias={athlete.athlete}
            flexWrap={`w-screen comp:wrap comp:flex-wrap 750:whitespace-nowrap`}
            displayMedal={`left-0 absolute smart460:relative text-xl ${medalMaterial(
              athlete.medal
            )}`}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default SlideCard;
