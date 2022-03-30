import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='my-8'>
            <nav className='flex justify-between items-center'>
                <h2 className='text-4xl font-semibold font-mono'><span className='text-cyan-600'>Meal</span>DB</h2>
                <ul className='flex gap-x-24 text-xl'>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/search'>Search</CustomLink></li>
                    <li><CustomLink to='/about'>About</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;