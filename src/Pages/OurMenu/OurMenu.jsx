import React from 'react';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hooks/useMenu';
import CoverBan from '../../Shared/CoverBan/CoverBan';
import ban1 from '../../assets/menu/banner3.jpg'
import ban2 from '../../assets/home/chef-service.jpg'
import CategoryMenu from '../../Shared/CategoryMenu/CategoryMenu';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { Link } from 'react-router-dom';

const OurMenu = () => {
    const menu = useMenu();
    const todayOffer = menu[0].filter(md => md.category === 'offered');
    const dessert = menu[0].filter(md => md.category === 'dessert');
    const pizza = menu[0].filter(md => md.category === 'pizza');
    const salad = menu[0].filter(md => md.category === 'salad');
    const soup = menu[0].filter(md => md.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <CoverBan img={ban1} header={'OUR MENU'} para={'Would you like to try a dish?'}></CoverBan>
            <CategoryMenu data={todayOffer} />
            <CategoryMenu data={dessert} title={'DESSERTS'} img={ban2} />
            <CategoryMenu data={pizza} title={'PIZZA'} img={ban2} />
            <CategoryMenu data={salad} title={'SALADS'} img={ban2} />
            <CategoryMenu data={soup} title={'SOUPS'} img={ban2} />
        </div>
    );
};

export default OurMenu;