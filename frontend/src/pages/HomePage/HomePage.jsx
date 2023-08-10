import { mens_kurta } from "../../assets/Men/men_kurta.js";
import MainCarousel from "../../customer/components/Carousel/MainCarousel.jsx";
import HomeSectionCarousel from "../../customer/components/HomeSectionCarousel/HomeSectionCarousel.jsx";
const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
        <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
          <HomeSectionCarousel
            data={mens_kurta}
            sectionName={"Women's Saree"}
          />
          <HomeSectionCarousel
            data={mens_kurta}
            sectionName={"Women's Dress"}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
