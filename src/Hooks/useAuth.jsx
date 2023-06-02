import { useContext } from "react";
import { authContext } from "../Auth/Auth";

const useAuth = () => {
    const auth = useContext(authContext)
    return auth;
};

export default useAuth;