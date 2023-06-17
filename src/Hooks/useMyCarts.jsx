import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyCarts = () => {
    const { user,loader } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loader,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
        },
    })
    return [cart, refetch];
};

export default useMyCarts;