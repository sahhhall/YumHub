import { Link } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { MainNav } from './MainNav';

export const Header = () => {
    return (
        <div className="py-6" style={{ borderBottom: '0.3px solid lightgray' }}>
            <div className="container mx-auto flex justify-between text-black items-center">
                <Link to="/" className="text-3xl font-bold">
                    YumHub.com
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className='hidden md:block'>
                    <MainNav />
                </div>
            </div>
        </div>
    );
};
