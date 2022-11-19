import React from 'react'
import Header from './Header';
import Product from './Product';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Footer from './Footer';


function Home() {
    return (
        <div className='home'>
        <Header/>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide> <img src="https://m.media-amazon.com/images/I/715uPxap-4L._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61S7anSm3yL._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61j6L8NKWZL._SX3000_.jpg" alt="" /></SwiperSlide>
    </Swiper>
                {/* <img className='home__image' src="https://m.media-amazon.com/images/I/715uPxap-4L._SX3000_.jpg" alt="" /> */}
            {/* product : id , title , price  , rating , img */}
            <div className="all__home__rows">
                <div className="home__row">
                    <Product 
                        id = "1231" 
                        title = "Laptop"
                        price = {20.95}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/51DkkAlbjLL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                        id = "1232" 
                        title = "Samsung Galaxy M52 5G Black,RAM 8 GB, 128 GB"
                        price = {83.00}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/710MCY53huL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                <Product 
                        id = "1233" 
                        title = "Anker Soundcore Life Note E, Black, True Wireless."
                        price = {116.5}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/61-uda1MkpL._AC_SX679_.jpg"
                    />
                <Product 
                        id = "1234" 
                        title = "SAMSUNG Galaxy A53 5G Mobile Phone SIM Free Android Smartphone."
                        price = {10.280}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/71tcW6BzTHL._AC_SX569_.jpg"
                    />
                <Product 
                        id = "1235" 
                        title = "Nokia 106 Dual SIM- Dark Grey"
                        price = {60.95}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/61rTSeWyUpL._AC_SX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = "1237" 
                        title = "LG UHD 4K TV 55 Inch UQ7500 Series, Cinema Screen Design 4K Active HDR WebOS Smart AI ThinQ - 55UQ75006L (New 2022)"
                        price = {8.699}
                        rating = {5}
                        image = "https://images-na.ssl-images-amazon.com/images/I/617vueWoGYL.__AC_SY300_SX300_QL70_ML2_.jpg"
                    /> 
                </div>
                <div className="home__row">
                    <Product 
                        id = "1244" 
                        title = "Guess By Marciano for Women, Eau de Parfum - 100 ml"
                        price = {30}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/716VD3weqaL._AC_SX679_.jpg"
                    />
                    <Product 
                        id = "1255" 
                        title = "Davidoff Cool Water Eau de Toilette for Men, 125ml"
                        price = {35}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/61mtvErcttL._AC_SX679_.jpg"
                    />
                </div>
                <div className="home__row">
                <Product 
                        id = "1286" 
                        title = "Adidas X SPEEDPORTAL.4 FxG J"
                        price = {50}
                        rating = {4}
                        image = "https://images-eu.ssl-images-amazon.com/images/I/41zg-6dhriL._AC_SX184_.jpg"
                    />
                <Product 
                        id = "1222" 
                        title = "Back Bag - for Women, Girls and Boys - Large Size 40x30x14cm"
                        price = {44}
                        rating = {3}
                        image = "https://images-eu.ssl-images-amazon.com/images/I/31+1ZOEWz7L._AC_SX184_.jpg"
                    />
                <Product 
                        id = "1888" 
                        title = "Black & Decker 4 Liter Deep Fryer - AF400-B5 - - International Warranty"
                        price = {150}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/61j2bgU9x5L._AC_UL480_QL65_.jpg"
                    />
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Home ;