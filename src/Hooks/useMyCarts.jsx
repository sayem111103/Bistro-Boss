import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyCarts = () => {
    const { user,loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        // queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        //     return res.json();
        // },
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const response = await axiosSecure(`http://localhost:5000/carts?email=${user?.email}`)
            return response.data;
        },
    })
    return [cart, refetch];
};

export default useMyCarts;