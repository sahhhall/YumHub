
import hero from '../../assets/headProfile.webp'

export const Banner = () => {
    return (
<div className='container'>
        <img src={hero} alt="hero" className='w-full object-cover max-h-[16rem]' />
</div>
    )
}