import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./style.css";
import { RestaurantCard } from "../RestaurantCard";

export const RestaurantCardSlider = ({ restaurantsData }: any) => {
  const carousel = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      const { clientWidth, scrollWidth } = carousel.current;
      setWidth(-(scrollWidth - clientWidth));
    }
  }, [restaurantsData]);
  return (
    <>
      <motion.div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width - 40 }}
          className="inner-carousel"
          whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
          ref={carousel}
        >
          {restaurantsData.map((restaurant: any, index: number) => (
            <motion.div key={index} className="item">
              <RestaurantCard restaurant={restaurant} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
