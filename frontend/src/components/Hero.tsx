import main from '../assets/hero.webp'

const Hero = () => {
  return (
    <div>
        <img src={main} className='w-full max-h-[34rem] object-cover' alt="" />
    </div>
  );
};

export default Hero;
