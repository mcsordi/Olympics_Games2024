import Medals from "../Medals";

// eslint-disable-next-line react/prop-types
function LineUpMedal({ display }) {
  return (
    <section
      className={` flex  w-full items-center justify-end
    top-24  absolute comp:justify-center comp:gap-14 smart460:w-9/12 comp:w-full comp:top-32  `}
    >
      <Medals
        display={`flex text-xl gap-1 smartPhone:gap-3 700:gap-4 850:gap-5 comp:gap-4 comp:justify-end  comp:w-full 2xl:gap-5`}
      />
      <Medals
        display={`flex-row-reverse hidden text-xl gap-1 smartPhone:gap-3 700:gap-4 850:gap-5 
          comp:gap-4 comp:justify-end comp:${display}  comp:w-full 2xl:gap-5 `}
      />
    </section>
  );
}
export default LineUpMedal;
