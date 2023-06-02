import { useForm } from 'react-hook-form';
import bgimg from '../../assets/others/authentication.png'
import loginimg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/all';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signInWithEmailPass , user} = useAuth();
    const [errorMessages, setError] = useState('')
    const [disabled, setDisabled] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate('/')
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailPass(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            if(errorMessage === 'Firebase: Error (auth/user-not-found).'){
                return setError('user-not-found')
            }
            setError(errorMessage)
          });
    };
    useEffect(() => {
        loadCaptchaEnginge(4)
    }, [])
    const handleCaptcha = (e) => {
        const captcha = e.target.value;
        if (validateCaptcha(captcha)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <section className="py-[100px] flex justify-center items-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='w-9/12 px-4 py-6' style={{ backgroundImage: `url(${bgimg})`, boxShadow: 'rgba(0,0,0,0.2) 3px 4px 10px 2px' }}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row lg:gap-4">
                        <div className="text-center lg:text-left">
                            <img src={loginimg} alt={loginimg} />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h3 className='text-center text-2xl font-bold'>Login</h3>
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <p className='text-red-500 text-center'>{errorMessages}</p>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input bg-white input-bordered" {...register("email", {
                                        required: true
                                    })} />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                {/* include validation with required or other standard HTML validation rules */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input bg-white input-bordered" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 8
                                    })} />
                                </div>
                                {/* errors will return when field validation fails  */}
                                {errors.password === '' && <span className='text-red-500'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password should be minimum 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password should be maximum 8 character</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password should be one uppercase letter, one lowercase letter, and one number or special character.</span>}
                                <div className='form-control mt-4'>
                                    <LoadCanvasTemplate />
                                    <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input bg-white mt-3 input-bordered" />
                                </div>
                                <input disabled={disabled} className="btn mt-4 border-0 disabled:bg-[rgba(209,159,84,0.2)] disabled:text-[rgba(255,255,255,0.5)] hover:bg-[rgba(209,159,84,0.7)] bg-[rgba(209,159,84,0.7)] text-white" type="submit" />
                            </form>

                            <div className="flex flex-col w-full justify-center border-opacity-50">
                                <Link to='/register' className='text-center text-[rgba(209,159,84,0.7)]'>New here? Create a New Account</Link>                                
                                <div className='text-center mt-4 capitalize'>or sign in with</div>
                                <div className="grid h-20 card rounded-box place-items-center">
                                    <FcGoogle className='text-6xl cursor-pointer'></FcGoogle>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;