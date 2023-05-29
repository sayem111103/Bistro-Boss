import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabMenu.css'
import { useEffect, useState } from 'react';

const TabMenu = ({ tabItem, tabData, category }) => {
    const [tabIndex, setTabIndex] = useState();
    console.log(category);
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
                        td.map(md => <div key={md._id} className="card mx-auto w-[320px] shadow-xl">
                            <figure><img className="w-full" src={md.image} alt={md.image} /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title justify-center">{md.name}</h2>
                                <p>{md.recipe}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn bg-transparent border-0 border-b-2 border-[#BB8506] text-[#BB8506]">add to cart</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </TabPanel>)}
        </Tabs>        
    );
};

export default TabMenu;