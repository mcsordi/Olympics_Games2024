// import sports from "../../../src/json/games.json";
// import Medals from "../../Components/Medals";
// import Card from "../Card";

// // eslint-disable-next-line react/prop-types
// function CountryBySport({ compare, condition }) {
//   const sportSorted = sports.sort(
//     (sportA, sportB) =>
//       sportB.gold - sportA.gold ||
//       sportB.silver - sportA.silver ||
//       sportB.bronze - sportA.bronze
//   );

//   return (
//     <section
//       className={` p-2 flex-col items-center text-end rounded-sm bg-white border-primary-700 border w-1/3 h-auto ${
//         condition ? "flex" : "hidden"
//       } `}
//     >
//       <div className="w-full mr-10 justify-end flex flex-row">
//         <Medals display={"text-xl gap-9 flex"} />
//       </div>
//       {sportSorted.map((sport, index) => {
//         return sport.sport.toLocaleUpperCase() == compare ? (
//           <Card
//             key={index}
//             country={`../../src/images/${sport.country}`}
//             hidden={`min-w-full`}
//             nameCountry={`${sport.country}`}
//             configICon={"hidden"}
//             justify={`justify-center`}
//             gold={`${sport.gold}`}
//             silver={`${sport.silver}`}
//             bronze={`${sport.bronze}`}
//             total={`${sport.total}`}
//           />
//         ) : (
//           ""
//         );
//       })}
//     </section>
//   );
// }
// export default CountryBySport;
