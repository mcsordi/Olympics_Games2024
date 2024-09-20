import { Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
export default Layout;
