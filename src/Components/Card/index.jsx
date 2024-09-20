function Card({
  country,
  nameCountry,
  alias,
  place,
  gold,
  silver,
  bronze,
  total,
  display,
  margin,
  textMargin,
  justify,
  hidden,
  medals,
}) {
  return (
    <section
      className={`px-5 my-3 relative   flex items-center  rounded-lg w-full h-16 comp:w-1/3
     text-black border-primary-700 border bg-white smart460:w-4/5  smart460:mx-5 ${hidden}`}
    >
      <div
        className={`flex items-center w-full justify-between  gap-5   ${display}`}
      >
        <p className="font-poppins">{place}</p>
        <img
          className={`border border-primary-700 w-16 h-11 absolute ml-10 ${margin}`}
          src={`../../../src/images/${country}.png`}
        ></img>
        <h2
          className={`w-96 font-poppins  left-20  max-h-full justify-start text-start hidden  relative flex-wrap break-normal comp:left-0 sm:flex ${justify}  ${textMargin}`}
        >
          {nameCountry}
        </h2>
        <h2 className="ml-20 flex relative flex-wrap w-56 sm:hidden">
          {alias}
        </h2>
        <div
          className={`gap-2 font-notojp  flex items-center flex-row  w-72 justify-around smartPhone:gap-4 ${medals} `}
        >
          <span>{gold}</span>
          <span>{silver}</span>
          <span>{bronze}</span>
          <strong>{total}</strong>
        </div>
      </div>
    </section>
  );
}
export default Card;
