import ImageCarousel from "./Main/ImageCarausel";
import Cards from "./Main/Cards";
import Layout from "./Sections/Layout";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div>
        <ImageCarousel />
        <Cards />
        <Layout />
      </div>
      <Outlet /> 
    </div>
  );
};

export default Template;
