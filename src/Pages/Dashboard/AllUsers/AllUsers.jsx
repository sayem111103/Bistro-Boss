import useAllUser from "../../../Hooks/useAllUser";
import { RiDeleteBin6Fill, MdPeopleOutline } from 'react-icons/all'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
const AllUsers = () => {
    const {deleteAnUser} = useAuth();
    const [users, refetch] = useAllUser();
    const [axiosSecure] = useAxiosSecure()
    const handleRole =(_id, name) =>{
        console.log(_id, name);
        axiosSecure.patch(`/users/${_id}`)
        .then(res => {
            if(res.data.matchedCount){
                refetch()
                Swal.fire(
                    'Good job!',
                    `${name} appointed as admin successfully`,
                    'success'
                  )
            }
        })
    }

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
                deleteAnUser()
                .then(()=>{
                    axiosSecure.delete(`/users/${_id}`)
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
                })
                .catch(error=>{
                    console.log(error.message);
                })                
            }
        })

    }
    return (
        <div className="overflow-x-auto">
            <div className="mt-6 flex w-full justify-between items-center py-4">
                <p className="text-lg font-bold">Total Users : {users.length}</p>
            </div>
            <table className="table">
                {/* <!-- head --> */}
                <thead>
                    <tr className="bg-[#D1A054] border-none">
                        <th></th>
                        <th className="text-white text-center">Name</th>
                        <th></th>
                        <th className="text-white text-center">Email</th>
                        <th></th>
                        <th className="text-white text-center">Role</th>
                        <th></th>
                        <th className="text-white text-center">Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        users.map((ud, index) => <tr key={ud._id} className="border-[#E8E8E8]">
                            <td>{index + 1}</td>
                            <td className="text-center">
                                {ud.name}
                            </td>
                            <td></td>
                            <td className="text-center">
                                {ud.email}
                            </td>
                            <td></td>
                            <th className="text-center capitalize">
                                {ud.role === 'admin' ? 'admin' : <button onClick={() => handleRole(ud._id, ud.name)} className="btn bg-red-500 hover:bg-red-500 border-none"><MdPeopleOutline className="text-white text-xl"></MdPeopleOutline></button>}
                            </th>
                            <td></td>
                            <th className="text-center">
                                <button onClick={() => handleDelete(ud._id)} className="btn bg-red-500 hover:bg-red-500 border-none"><RiDeleteBin6Fill className="text-white text-xl"></RiDeleteBin6Fill></button>
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

export default AllUsers;