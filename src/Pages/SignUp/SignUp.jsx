import { useForm } from 'react-hook-form';
import bgimg from '../../assets/others/authentication.png'
import loginimg from '../../assets/others/authentication2.png'

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input bg-white input-bordered" {...register("email",{
                                        required:true
                                    })} />
                                </div>
                                {/* include validation with required or other standard HTML validation rules */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input bg-white input-bordered" {...register("password",{
                                        required:true,
                                        minLength:6,
                                        maxLength:8,
                                    })} />
                                </div>
                                {/* errors will return when field validation fails  */}
                                {errors.password === '' && <span className='text-red-500'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password should be minimum 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password should be maximum 8 character</span>}

                                <input className="btn mt-4 border-0 hover:bg-[rgba(209,159,84,0.7)] bg-[rgba(209,159,84,0.7)] text-white" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;