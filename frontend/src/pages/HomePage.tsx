import AdHero from "../assets/hero1.png";
const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white text-center flex-col flex lg:flex-row  tracking-wide">
        <div className="lg:w-[50%]  flex flex-col">
          <h1 className="md:text-7xl text-5xl  md:w-full tracking-wide font-bold mt-11">
            Dive into Deliciousness
          </h1>

          <span className="md:text-3xl text-3xl  font-bold mt-1 tracking-wider">
            Food is just a click away
          </span>

          <h1 className="text-sm font-normal pt-3  md:tracking-widest">
            Explore our wide menu easily and order with just a few taps. Our 
            simple  interfacemakes <br />ordering  your  favorite  dishes <br /> super easy.
          </h1>
          <h1 className=" tracking-tighter font-thin leading-3  text-6xl mt-12 animate-out ">
            Click, click, eat.
          </h1>
        </div>

        <img src={AdHero} alt="hero" className=" object-cover lg:ms-24 " />
      </div>
    </div>
  );
};

export default HomePage;
