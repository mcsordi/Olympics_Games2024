/* eslint-disable react/prop-types */

import { TurnOnIcons } from "../../context/context";

function Card({
  children,
  imageCard,
  textCard,
  alias,
  countryPlace,
  gold,
  silver,
  bronze,
  total,
  displayCard,
  flexImageCard,
  flexTextCard,
  hiddenCard,
  flexMedals,
  configICon,
  flexPlace,
  flexAlias,
  flexExpandIcons,
}) {
  const { expand, useIcon, showIcon } = TurnOnIcons(configICon);

  return (
    <>
      <section
        className={`w-screen px-2 mx-0 smart460:px-5 my-3  flex items-center justify-center rounded-lg  h-16 comp:w-1/3
     text-black border-primary-700 border bg-white smart460:w-4/5   smart460:mx-5 ${hiddenCard}`}
      >
        <div
          className={`flex items-center w-full justify-between  gap-5  ${displayCard}`}
        >
          <p className={`${flexPlace} font-poppins`}>{countryPlace}</p>

          <img
            className={`border border-primary-700 w-16 h-11 relative  ${flexImageCard}`}
            src={`${imageCard}.png`}
          ></img>

          <h2
            className={`w-full font-poppins  max-h-full justify-start text-start
              relative flex-wrap break-normal comp:left-0 sm:flex ${flexTextCard} `}
          >
            {textCard}
          </h2>
          <h2
            className={`w-full font-medium  relative flex-wrap  sm:hidden ${flexAlias}`}
          >
            {alias}
          </h2>

          <div
            className={`gap-2 font-notojp  flex items-center flex-row  w-72 justify-around smartPhone:gap-4 ${flexMedals} `}
          >
            <span>{gold}</span>
            <span>{silver}</span>
            <span>{bronze}</span>
            <strong>{total}</strong>
          </div>
          <div className={`${flexExpandIcons}`}>{useIcon(configICon)}</div>
        </div>
      </section>
      {showIcon == true || expand == true ? children : ""}
    </>
  );
}
export default Card;
