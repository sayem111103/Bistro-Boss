import React from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className='w-full py-4'>
            <SectionHeader subName={"What's new?"} name={'ADD AN ITEM'}></SectionHeader>
            <div className='mt-5 w-9/12 mx-auto bg-slate-100'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name" className="input bg-white input-bordered" {...register("name", {
                            required: true
                        })} />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <div className='flex gap-5'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select className='py-3 bg-white border px-3 rounded-lg focus-visible:outline-none' {...register("category")}>
                                <option></option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            {errors.category && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" className="input bg-white input-bordered" {...register("price", {
                                required: true
                            })} />
                            {errors.price && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea type="text" placeholder="Recipe Details" className="input h-[150px] pt-3 bg-white focus:outline-none input-bordered" {...register("recipe", {
                            required: true
                        })} />
                        {errors.recipe && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo*</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered bg-white"  {...register("photo", {
                            required: true
                        })} />
                        {errors.photo && <span className='text-red-500'>This field is required</span>}
                    </div>

                <input className="btn mt-4 border-0 hover:bg-[rgba(209,159,84,0.7)] bg-[rgba(209,159,84,0.7)] text-white" type="submit"  value='add item'/>
                </form>
            </div>
        </div>
    );
};

export default AddItems;