import React from 'react';
import CoverBan from '../../Shared/CoverBan/CoverBan';
import ban1 from '../../assets/shop/banner2.jpg'
import TabMenu from './TabMenu/TabMenu';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';


const OurShop = () => {
    const {category} = useParams();
    const menu = useMenu();
    const drinks = menu[0].filter(md => md.category === 'drinks');
    const dessert = menu[0].filter(md => md.category === 'dessert');
    const pizza = menu[0].filter(md => md.category === 'pizza');
    const salad = menu[0].filter(md => md.category === 'salad');
    const soup = menu[0].filter(md => md.category === 'soup');
    const tabItem = ['SALADS', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS']
    const tabData = [salad, pizza, soup, dessert, drinks]
    return (
        <div>
             <CoverBan img={ban1} header={'OUR SHOP'} para={'Would you like to try a dish?'}></CoverBan>
             <section className="py-24 max-w-screen-lg mx-auto">
             <TabMenu tabItem={tabItem} tabData={tabData} category={category}></TabMenu>
             </section>
        </div>
    );
};

export default OurShop;