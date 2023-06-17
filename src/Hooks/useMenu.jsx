import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
    const [axiosApi] = useAxios()
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        const menus = async() =>{
            const res = await axiosApi.get('/menu')
            setMenu(res.data)
        }  
        menus() 
    },[])

    return [menu]
};

export default useMenu;