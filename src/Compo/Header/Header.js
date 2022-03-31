import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <header className='my-8'>
            <nav className='flex justify-between items-center'>
                <Link to='/'>
                   <h2 className='text-4xl font-semibold font-mono'><span className='text-cyan-600'>Meal</span>DB</h2>
                </Link>
                <ul className='flex gap-x-24 text-xl font-semibold'>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/search'>Search</CustomLink></li>
                    <li><CustomLink to='/about'>About</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;