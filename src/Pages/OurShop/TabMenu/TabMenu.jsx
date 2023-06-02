import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabMenu.css'
import { useEffect, useState } from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const TabMenu = ({ tabItem, tabData, category }) => {
    const [tabIndex, setTabIndex] = useState();
    useEffect(() => {
        if (category === undefined || category == 'undefined') {
            setTabIndex(0)
        }
        else {
            const initialIndex = tabItem.indexOf(category);
            setTabIndex(initialIndex)
        }
    }, [category])
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                {tabItem.map((td, index) => <Tab key={index}>{td}</Tab>)}
            </TabList>
            {tabData.map((td, index) => <TabPanel key={index}>
                <div className='grid md:grid-cols-3 gap-4 pt-6'>
                    {
                        td.map(md =><FoodCard key={md._id} md={md}></FoodCard>)
                    }
                </div>
            </TabPanel>)}
        </Tabs>        
    );
};

export default TabMenu;