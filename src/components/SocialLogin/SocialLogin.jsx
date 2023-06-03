import { FcGoogle } from 'react-icons/all';
import useAuth from '../../Hooks/useAuth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {auth} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const google = new GoogleAuthProvider();
    const signWithSocial =(provider)=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            const saveUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            axiosSecure.post('/users',saveUser)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Login',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate(from, {replace: true})
                }
            })

            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="grid h-20 card rounded-box place-items-center">
            <FcGoogle onClick={()=>signWithSocial(google)} className='text-6xl cursor-pointer'></FcGoogle>
        </div>
    );
};

export default SocialLogin;