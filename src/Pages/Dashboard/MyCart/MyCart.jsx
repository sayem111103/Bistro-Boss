import Swal from "sweetalert2";
import useMyCarts from "../../../Hooks/useMyCarts";
import { RiDeleteBin6Fill } from 'react-icons/all';
import './MyCart.css'
import useAxios from "../../../Hooks/useAxios";

const MyCart = () => {
    const [cart, refetch] = useMyCarts();
    const [axiosApi] = useAxios();
    const totalPrice = cart.reduce((total, item) => { return total + item.price }, 0)
    const totalFixed = totalPrice.toFixed(2);
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosApi.delete(`/carts/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="overflow-x-auto">
            <div className="mt-6 flex w-full justify-between items-center py-4">
                <p className="text-lg font-bold">Total Order : {cart.length}</p>
                <p className="text-lg font-bold">Total Price : ${parseFloat(totalFixed)}</p>
                <button className="btn bg-[#D1A054] hover:bg-[#D1A054] border-none text-white">Pay</button>
            </div>
            <table className="table">
                {/* <!-- head --> */}
                <thead>
                    <tr className="bg-[#D1A054] border-none">
                        <th></th>
                        <th className="text-white">Item Image</th>
                        <th></th>
                        <th className="text-white text-center">Item Name</th>
                        <th></th>
                        <th className="text-white">Price</th>
                        <th></th>
                        <th className="text-white text-center">Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        cart.map(cd => <tr key={cd._id} className="border-[#E8E8E8]">
                            <td></td>
                            <td className="text-center">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cd.img} alt={cd.img} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td className="text-center">
                                {cd.name}
                            </td>
                            <td></td>
                            <td className="text-center">${cd.price}</td>
                            <td></td>
                            <th className="text-center">
                                <button onClick={() => handleDelete(cd._id)} className="btn bg-red-500 hover:bg-red-500 border-none"><RiDeleteBin6Fill className="text-white text-xl"></RiDeleteBin6Fill></button>
                            </th>
                        </tr>)
                    }
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default MyCart;