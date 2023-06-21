import React from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    // const [error, setError] = useState('');
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_TOKEN}`
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = datas => {
        // setError('')
        const formData = new FormData();
        formData.append('image', datas.image[0])
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    const image = data.data.display_url;
                    const config = {
                        name: datas.name,
                        recipe: datas.recipe,
                        image: image,
                        category: datas.category,
                        price: parseFloat(datas.price)
                    }
                    axiosSecure.post('/menu', config)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire(
                                    '',
                                    'Item Added Successfully',
                                    'success'
                                )
                            }
                        })
                }
            })

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
                            <select defaultValue='Pick One' className='py-3 bg-white border px-3 rounded-lg focus-visible:outline-none' {...register("category", {
                                required: true
                            })}>
                                <option disabled>Pick One</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>desi</option>
                                <option>drinks</option>
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
                        <input type="file" className="file-input file-input-bordered bg-white"  {...register("image", {
                            required: true
                        })} />
                        {errors.photo && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <input className="btn mt-4 border-0 hover:bg-[rgba(209,159,84,0.7)] bg-[rgba(209,159,84,0.7)] text-white" type="submit" value='add item' />
                </form>
            </div>
        </div>
    );
};

export default AddItems;