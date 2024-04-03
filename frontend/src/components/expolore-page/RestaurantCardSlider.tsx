import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./style.css";
import { RestaurantCard } from "./RestaurantCard";

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
      <motion.div className="carousel mt-4">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width - 40 }}
          className=" flex gap-3 md:flex"
          ref={carousel}
        >
          {restaurantsData.map((restaurant: any, index: number) => (
            <motion.div key={index} className="item "><button>
              <RestaurantCard   restaurant={restaurant} />
            </button>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
