import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";

const ChefRecommend = () => {
    const menu = useMenu();
    const popular = menu[0].filter(md => md.category === 'popular')
    return (
        <section className="pb-24 max-w-screen-lg mx-auto">
            <SectionHeader subName={'Should Try'} name={'CHEF RECOMMENDS'}></SectionHeader>
            <div className="flex flex-wrap justify-center pt-[80px] gap-6">
                {popular.map(md => <FoodCard key={md._id} md={md}></FoodCard>)}
            </div>
        </section>
    );
};

export default ChefRecommend;