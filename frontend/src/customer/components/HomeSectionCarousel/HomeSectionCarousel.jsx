/* eslint-disable react/jsx-key */
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard.jsx";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import PropTypes from "prop-types";
const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
    HomeSectionCarousel.propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                imageUrl: PropTypes.string.isRequired,
                brand: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
                discountedPrice: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                discountPercent: PropTypes.number.isRequired,
                size: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        quantity: PropTypes.number.isRequired,
                    })
                ).isRequired,
                quantity: PropTypes.number.isRequired,
                topLavelCategory: PropTypes.string.isRequired,
                secondLavelCategory: PropTypes.string.isRequired,
                thirdLavelCategory: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
        sectionName: PropTypes.string.isRequired,
    };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data
    .slice(0, 10)
    .map((item,index) => <HomeSectionCard key={index} product={item} />);
  return (
    <div className=" border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          responsive={responsive}
        />
        {activeIndex !== items.length + 5 && (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            onClick={slideNext}
            className="z-50"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
            className="z-50"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
