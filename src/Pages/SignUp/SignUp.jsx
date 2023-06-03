import { useForm } from 'react-hook-form';
import bgimg from '../../assets/others/authentication.png'
import loginimg from '../../assets/others/authentication2.png'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [errorMessages, setError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { createWithemailAndPass, user, updatEProfile } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    if (user) {
        navigate('/')
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        setError('')
        createWithemailAndPass(email, password)
            .then((userCredential) => {
                updatEProfile(data.name, data.photo)
                    .then(() => {
                        // Profile updated!
                        const users = {
                            name: data.name,
                            email: email,
                            photo: data.photo,
                            password: password
                        }
                        axiosSecure.post('/users', users)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Successfully Login',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch((error) => {
                        // An error occurred
                        console.log(error.message);
                    });
            })

            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    return setError('email-already-in-use')
                }
                setError(errorMessage);
                // ..
            });
    };

    return (
        <section className="py-[100px] flex justify-center items-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='w-9/12 px-4 py-6' style={{ backgroundImage: `url(${bgimg})`, boxShadow: 'rgba(0,0,0,0.2) 3px 4px 10px 2px' }}>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-4">
                        <div className="text-center lg:text-left">
                            <img src={loginimg} alt={loginimg} />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h3 className='text-center text-2xl font-bold'>Sign Up Here!!</h3>
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                <p className='text-red-500 text-center'>{errorMessages}</p>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" className="input bg-white input-bordered" {...register("name", {
                                        required: true
                                    })} />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" className="input bg-white input-bordered" {...register("photo", {
                                        required: true
                                    })} />
                                    {errors.photo && <span className='text-red-500'>This field is required</span>}
                                </div>

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
                                        maxLength: 8,
                                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                                    })} />
                                </div>
                                {/* errors will return when field validation fails  */}
                                {errors.password === '' && <span className='text-red-500'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password should be minimum 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password should be maximum 8 character</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password should be Minimum eight characters, at least one letter and one number.</span>}

                                <input className="btn mt-4 border-0 hover:bg-[rgba(209,159,84,0.7)] bg-[rgba(209,159,84,0.7)] text-white" type="submit" />
                                <div className='text-center'><Link to='/login' className='text-center text-[rgba(209,159,84,0.7)]'>Already registered? Go to log in</Link> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;