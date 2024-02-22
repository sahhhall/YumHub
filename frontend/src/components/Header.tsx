import { Link } from 'react-router-dom';
import { MobileNav } from './MobileNav';

export const Header = () => {
    return(
        <div className="border-b-2 border-b-gray-500 py-6">
            <div className="container mx-auto flex justify-between text-black-500 items-center">
                <Link to="/" className="text-3xl font-bold ">
                    YumHub.com
                </Link>
                <div className="md:hidden">
                   <MobileNav />
                </div>
               
            </div>
        </div>
    )
}
