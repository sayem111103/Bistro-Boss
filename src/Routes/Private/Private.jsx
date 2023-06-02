import { useContext } from "react";
import { authContext } from "../../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

const Private = ({ children }) => {
    const location = useLocation()
    const { user, loader } = useContext(authContext);
    if (loader) {
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
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default Private;