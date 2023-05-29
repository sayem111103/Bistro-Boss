import ban from '../../../assets/home/featured.jpg'
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
const FromOurMenu = () => {
    return (
        <section className='py-20 mb-[130px] bg-[rgba(0,0,0,0.5)] bg-blend-multiply' style={{ backgroundAttachment: 'fixed', backgroundImage: `url(${ban})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='max-w-screen-lg mx-auto'>
                <SectionHeader subName={'Check it out'} name={'FROM OUR MENU'} value={true}></SectionHeader>
                <div className='py-9 flex gap-12'>
                    <img className='w-2/5' src={ban} alt={ban} />
                    <div className='text-white'>
                        <span>March 20, 2023</span>
                        <h3> WHERE CAN I GET SOME?</h3>
                        <p className='text-md  font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='mt-8 btn bg-transparent text-white font-bold border-0 border-b-2 border-white hover:bg-transparent hover:border-white'>Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FromOurMenu;