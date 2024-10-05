import SportsCard from "../../Components/Card/sportsCard";

import ExpandAll from "../../Components/ExpandAll";

function Sports() {
  return (
    <section className="mt-20 w-full  comp:mt-0  h-full flex flex-col justify-center items-center">
      <ExpandAll />
      <SportsCard />
    </section>
  );
}
export default Sports;
