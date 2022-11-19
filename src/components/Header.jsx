import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/amazon_PNG11.png"
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}] = useStateValue();
    return (
        <div className="all__headers">
            <nav className='header'>
        {/*amazon logo*/}
        <Link to="/">
            <img className='header__logo' src={logo} alt="" />
        </Link>
        {/* Search Box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <i className="fa-solid fa-magnifying-glass" ></i>
        </div>
        {/* 3 Links*/}
        {/* 1st Link*/}
        <div className="header__nav">
            <Link to="/login" className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello Hassan</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
                {/* 2nd Link*/}
            <Link to="/" className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& orders</span>
                </div>
            </Link>
                {/* 3rd Link*/}
            <Link to="/" className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
                {/* 4th Link*/}
            <Link to="/checkout" className='header__link'>
                <div className="header__optionBasket">
                    {/* Icon*/}
                    <i className="fa-solid fa-basket-shopping"></i>  
                    {/*  badge*/}
                    <span className='header__optionLineTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    </nav>
    <div className="filter" >
        <p>Welcome Dear!! You Can Buy Very Good Things From Here</p>
    </div>
        </div>
    
    
    )
}

export default Header ;