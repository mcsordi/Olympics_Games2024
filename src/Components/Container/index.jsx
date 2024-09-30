// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <section className="flex items-center justify-center w-full  min-h-screen  bg-primary-100  comp:pt-28 ">
      {children}
    </section>
  );
}
export default Container;
