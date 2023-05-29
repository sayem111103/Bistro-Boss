import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";

const ChefRecommend = () => {
    const menu = useMenu();
    const popular = menu[0].filter(md => md.category === 'popular')
    return (
        <section className="pb-24 max-w-screen-lg mx-auto">
            <SectionHeader subName={'Should Try'} name={'CHEF RECOMMENDS'}></SectionHeader>
            <div className="flex flex-wrap justify-center pt-[80px] gap-6">
                {popular.map(md => <div key={md._id} className="card mx-auto w-[400px] shadow-xl">
                    <figure><img className="w-full" src={md.image} alt={md.image} /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">{md.name}</h2>
                        <p>{md.recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-transparent border-0 border-b-2 border-[#BB8506] text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    );
};

export default ChefRecommend;