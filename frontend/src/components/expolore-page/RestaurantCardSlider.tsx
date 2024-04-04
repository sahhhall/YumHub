import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./style.css";
import { RestaurantCard } from "./RestaurantCard";
import { useNavigate } from "react-router-dom";

export const RestaurantCardSlider = ({ restaurantsData }: any) => {
  const carousel = useRef(null);
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      const { clientWidth, scrollWidth } = carousel.current;
      setWidth(-(scrollWidth - clientWidth));
    }
  }, [restaurantsData]);

  const handleOnClick = (restaurantName: string) => {
    const urlSlug = restaurantName.replace(/\s+/g, "-");
    navigate({
      pathname: `/restaurants/${urlSlug}`,
    });
  };
  return (
    <>
      <motion.div className="carousel mt-4">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width - 40 }}
          className=" flex gap-3 md:flex"
          ref={carousel}
        >
          {restaurantsData.map((restaurant: any, index: number) => (
            <motion.div key={index} className="item ">
              <button
                onClick={() => {
                  handleOnClick(restaurant.restaurantName);
                }}
              >
                <RestaurantCard restaurant={restaurant} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
