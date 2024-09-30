import { Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ScrollTop from "../../Components/ScrollTop";

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ScrollTop />
    </>
  );
}
export default Layout;
