import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMyCarts from "../../Hooks/useMyCarts";
import { useNavigate } from "react-router-dom";

const FoodCard = ({md}) => {
    const navigate = useNavigate();
    const [,refetch] = useMyCarts()
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const handleAddToCart = (item) =>{
        if(!user){
            return navigate('/login');
        }
        console.log(item);
        const carts = {
            email: user.email,
            id: item._id,
            name: item.name,
            price: item.price,
            img: item.image
        }

        axiosSecure.post('/carts', carts)
        .then(res => {
            if(res.data.insertedId){          
                refetch()     
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })                  
            }
        })

        // another way of fetching 
        
        // fetch('http://localhost:5000/carts',{
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(carts)
        // })

        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }
    return (
            <div className="card mx-auto w-[320px] shadow-xl">
                <figure><img className="w-full h-[300px]" src={md.image} alt={md.image} /></figure>
                <p className="bg-[white] bg-opacity-75 text-center blur-xs text-black py-5 font-extrabold text-xl w-24 ml-auto right-0 rounded-tr-2xl rounded-bl-2xl absolute">${md.price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">{md.name}</h2>
                    <p>{md.recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=> handleAddToCart(md)} className="btn bg-transparent border-0 border-b-2 border-[#BB8506] text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default FoodCard;