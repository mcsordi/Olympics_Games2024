import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function Page404() {
  return (
    <section className="w-full h-full">
      <Header />
      <Container>
        <img
          className="w-11/12  smart460:w-8/12 700:w-6/12 comp:w-4/12 "
          src="./images/olympicsLogo.png"
        />
      </Container>
      <Footer />
    </section>
  );
}
export default Page404;
