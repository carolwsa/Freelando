import { Footer } from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Base;
