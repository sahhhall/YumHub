import AdHero from '../assets/hero1.png'
const HomePage = () => {
    return(
        <div className="flex flex-col">
            <div className="bg-white text-center flex-col flex lg:flex-row  tracking-wide">
                <div className='lg:w-[50%]  flex flex-col'>
                <h1 className="text-7xl tracking-wider font-bold mt-12  ">
                Dive into Deliciousness
                </h1>
                <span className="text-3xl font-bold mt-2 tracking-wider">
                    Food is just a click away
                </span>

                <h1 className='text-sm font-normal pt-4  tracking-wider'>
                Explore our wide menu easily and order with just a few taps. Our simple interface makes ordering your favorite dishes super easy.
                </h1>
                <h1 className=' tracking-tighter font-thin leading-5  text-6xl mt-12 animate-out '>
                Click, click, eat.
                </h1>
                </div>
               
                <img src={AdHero} alt="hero" className=' object-cover lg:ms-24 ' />
            </div>
        </div>
    )
}

export default HomePage;
