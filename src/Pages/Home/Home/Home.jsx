import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import Menu from '../Menu/Menu';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <Menu></Menu>
            <ChefRecommend></ChefRecommend>
            <FromOurMenu></FromOurMenu>
            <Review></Review>
        </div>
    );
};

export default Home;