import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        const menus = async() =>{
            const res = await axiosSecure('/menu')
            setMenu(res.data)
        }  
        menus() 
    },[])

    return [menu]
};

export default useMenu;