import Medals from "../Medals";

// eslint-disable-next-line react/prop-types
function LineUpMedal({ display }) {
  return (
    <section
      className="flex  w-11/12 items-center justify-end 
     absolute top-24 comp:justify-center comp:gap-20 smart460:w-9/12 comp:min-w-full comp:top-32"
    >
      <Medals
        display={`flex text-xl gap-1 comp:flex smartPhone:gap-2 400:gap-3 440:gap-4 smart460:gap-3 
          530:gap-4 560:gap-5 600:gap-6 660:gap-7 700:gap-8 750:gap-9 800:gap-10 850:gap-11 900:gap-12
           comp:gap-0 comp:justify-between comp:w-ten`}
      />
      <Medals
        display={`flex-row-reverse hidden text-xl comp:${display} comp:justify-between comp:w-ten `}
      />
    </section>
  );
}
export default LineUpMedal;
