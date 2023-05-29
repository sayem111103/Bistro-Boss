import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[menu])

    return (
        <section className="pb-24 max-w-screen-lg mx-auto">
            <SectionHeader subName={'Check it out'} name={'FROM OUR MENU'}></SectionHeader>
            <div className="flex flex-wrap justify-center gap-4 py-14">
                {menu.slice(0,6).map(md => <div className="w-[320px] gap-3 flex" key={md._id}>
                    <div style={{borderRadius: '0 200px 200px 200px'}} className="w-[200px] h-[70px] overflow-hidden"><img className="bg-center h-full object-cover w-full" src={md.image} alt={md.image} /></div>
                    <div>
                        <h4 className="font-bold">{md.name} ---------</h4>
                        <p className="text-xs font-thin">{md.recipe}</p>
                    </div>
                    <div className="text-[#BB8506]">
                        ${md.price}
                    </div>
                </div>)}
            </div>
            <button className="btn bg-transparent hover:bg-transparent text-black border-0 border-b-2 mx-auto block">View Full Menu</button>

            <div className="py-12 bg-black mt-[130px] text-center">
                <a className="text-white text-3xl" href="tel:+880192345678910">Call Us: +88 0192345678910</a>
            </div>
        </section>
    );
};

export default Menu;