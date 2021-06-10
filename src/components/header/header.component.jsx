import React from 'react';
// import {Link} from 'react-router-dom';
import {Link, animateScroll as scroll} from 'react-scroll';

import './header.styles.scss';

const Header = () => (
    <nav className='header-bar' id='header-bar'>
    <div className='header'>
        <div className='options'>
        <Link
        className='header-item'
        activeClass='active'
        to='aboutme'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
        About me
        </Link>

        <Link
        className='header-item'
        activeClass='active'
        to='interests'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
        Interests
        </Link>
        <Link
        className='header-item'
        activeClass='active'
        to='education'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
        Education
        </Link>
        </div>

    </div>
    </nav>
)

export default Header;