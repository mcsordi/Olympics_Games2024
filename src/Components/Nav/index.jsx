import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav(props) {
  const currentPage = useLocation().pathname;

  const changeMedalColor = (evt) => {
    evt.target.classList = "text-primary-600";
    const links = [...document.querySelectorAll("a.text-primary-600")];
    links.map((el) => {
      if (links.length > 1 && el !== evt.target) el.classList = "text-white";
    });
  };

  return (
    <nav
      // eslint-disable-next-line react/prop-types
      className={`${props.display}  text-xl justify-between  font-bebas items-center top-0 fixed gap-3 p-4 
         px-3 flex-col bg-primary-200 w-full h-48 mt-0.5   text-white
      sm:h-auto sm:w-auto sm:flex-row sm:flex sm:top-auto sm:right-auto sm:relative sm:text-xl sC:text-2xl sm:bg-transparent
      `}
    >
      <Link
        onClick={(evt) => {
          changeMedalColor(evt);
        }}
        to="/"
        className={`${
          currentPage == "/" ? "text-primary-600" : ""
        }  hover:text-primary-600 cursor-pointer `}
      >
        medalhas
      </Link>
      <Link
        onClick={(evt) => {
          changeMedalColor(evt);
        }}
        to="/esportes"
        className={`${
          currentPage == "/esportes" ? "text-primary-600" : ""
        } cursor-pointer`}
      >
        esportes
      </Link>
      <Link
        onClick={(evt) => {
          changeMedalColor(evt);
        }}
        to="/atletas"
        className={`${
          currentPage == "/atletas" ? "text-primary-600" : ""
        } cursor-pointer`}
      >
        Atletas
      </Link>
    </nav>
  );
}
export default Nav;
