import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CoverBan from "../CoverBan/CoverBan";

const CategoryMenu = ({ data, title, img}) => {
    return (
        <>
            {title && <CoverBan img={img} header={title} para={'Would you like to try a dish?'}></CoverBan>}
            <section className="py-24 max-w-screen-lg mx-auto">
                {title?'': <SectionHeader subName={"Don't miss"} name={"TODAY'S OFFER"} />}
                <div className="grid lg:grid-cols-2 justify-center gap-4 py-14">
                    {data.map(md => <div className="w-[320px] mx-auto gap-3 flex" key={md._id}>
                        <div style={{ borderRadius: '0 200px 200px 200px' }} className="w-[200px] h-[70px] overflow-hidden"><img className="bg-center h-full object-cover w-full" src={md.image} alt={md.image} /></div>
                        <div>
                            <h4 className="font-bold">{md.name} ---------</h4>
                            <p className="text-xs font-thin">{md.recipe}</p>
                        </div>
                        <div className="text-[#BB8506]">
                            ${md.price}
                        </div>
                    </div>)}
                </div>
                <Link to={`/ourshop/${title}`}><button className='mt-8 btn bg-transparent text-black font-bold border-0 border-b-2 border-black hover:bg-transparent mx-auto block'>Buy your favourite food</button></Link>
            </section>
        </>
    );
};

export default CategoryMenu;