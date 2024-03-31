import { cuisines } from "@/forms/manage-restraunt/config/restraunt--options";
import { CarouselSlider } from "../CarouselSlider";

export const Slider = () => {
  return (
    <div className="container">
      <h1 className="md:text-xl text-xs  font-extrabold tracking-wide">
        What's on your mind?
      </h1>
      <div>
        <CarouselSlider files={cuisines} />
      
      </div>
      <hr className="mt-20" />
    </div>
  );
};
