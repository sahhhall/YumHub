import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TProps = {
  files: any;
};
export const CarouselSlider = ({ files }: TProps) => {
  console.log("here waht i reciving", files);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {files.map((arr: any, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="  flex-col justify-center align-middle items-center mt-7 ">
              {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
              <div className=" flex items-center flex-col">
                <img
                  src={arr.img}
                  style={{ height: "6rem", width: "6.5rem" }}
                  alt={"df"}
                />
                <span className="tracking-widest font-semibold text-slate-700 ">{arr.name}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
