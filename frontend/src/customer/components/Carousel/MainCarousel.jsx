import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer"
      role="presentation"
      src={item.image} // Fix the typo here: it should be item.image, not item.imgage
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel; // Make sure the component name starts with a capital letter
