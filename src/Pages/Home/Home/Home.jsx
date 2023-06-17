import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import Menu from '../Menu/Menu';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';
import { Player } from '@lottiefiles/react-lottie-player';
import useAuth from '../../../Hooks/useAuth';

const Home = () => {
    const {loader} = useAuth();
        if(loader){
            return <div className="h-[100vh] flex justify-center items-center">
                 <Player
                     autoplay
                     loop
                     src="https://assets3.lottiefiles.com/packages/lf20_1MqqidYBdB.json"
                     style={{ height: '300px', width: '300px' }}
                 >
                 </Player>
             </div>
         }
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