import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Player } from '@lottiefiles/react-lottie-player';
import { Navigate } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return <div className="h-[100vh] flex justify-center items-center">
        <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_1MqqidYBdB.json"
            style={{ height: '300px', width: '300px' }}
        >
        </Player>
    </div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;