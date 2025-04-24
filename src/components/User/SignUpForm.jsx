import React, { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        summary: '',
        country: '',
        city: '',
        cv: null,
        password: '',
        repeat_password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.cv) newErrors.cv = 'CV is required';

        if (!formData.password.trim()) newErrors.password = 'Password is required';
        if (!formData.password !== formData.repeat_password){
            newErrors.repeat_password = 'Password do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Send formData to your API here
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className='flex justy-between gap-5'>
                <div className='md:w-1/3'>
                    <div className="px-5 py-5 rounded-lg bg-white shadow-sm">
                        <div className='flex justy-between gap-4'>
                            <div className="flex justify-center items-center rounded-full bg-black px-5 py-5 w-5 h-5 text-white">
                                1
                            </div>
                            <div className="text-md rounded-lg bg-black text-white px-5 py-5 w-full">
                                <span className='font-semibold'>Sign up</span>
                                <p className='mt-2 text-sm'> Sign up today on Kazi to unlock personalized job matches.</p>
                            </div>
                        </div>
                        <div className='flex justy-between gap-4 mt-3'>
                            <div className="flex justify-center items-center rounded-full bg-gray-200 px-5 py-5 w-5 h-5 text-gray-800">
                                2
                            </div>
                            <div className="text-md rounded-lg bg-gray-200 px-5 py-5 h-36 w-full">
                                <span className='font-semibold'>AI-powered profile reviews</span>
                                <p className='mt-2 text-sm'> Get personalized feedback on your profile and resume to increase your chances of landing your dream job.</p>
                            </div>
                        </div>
                        <div className='flex justy-between gap-4 mt-3'>
                            <div className="flex justify-center items-center rounded-full bg-black text-white px-5 py-5 w-5 h-5">
                                3
                            </div>
                            <div className="text-md rounded-lg bg-black text-white px-5 py-5 h-36 w-full">
                                <span className='font-semibold'>Smart Shortlisting & Interviews</span>
                                <p className='mt-2 text-sm'>
                                    Let Kazi’s AI shortlist top candidates and schedule interviews faster, helping employers hire efficiently and job seekers stand out.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
                <form onSubmit={handleSubmit} className="md:w-2/3 px-5 md:px-10 py-5 md:py-5 bg-white rounded-lg shadow-sm">

                    <div className='flex gap-5 justify-between items-center'>
                        <div className='w-full'>
                            <label className="block text-gray-600">Full name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5 justify-between items-center'>
                        <div className='w-1/2'>
                            <label className="block text-gray-600">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>

                        <div className='w-1/2'>
                            <label className="block text-gray-600">Phone *</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5 justify-between items-center'>

                        <div className='w-1/2'>
                            <label className="block text-gray-600">Country </label>
                            <select
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            >
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
                        </div>

                        <div className='w-1/2'>
                            <label className="block text-gray-600">City </label>
                            <select
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            >
                                <option></option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5 justify-between items-center'>
                        <div className='w-full'>
                            <label className="block text-gray-600">Summary</label>
                            <textarea
                                type="text"
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.summary && <p className="text-red-600 text-sm">{errors.summary}</p>}
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5 justify-between items-center'>
                        <div className=''>
                            <label className="block  text-gray-600">CV (PDF/Word)*</label>
                            <div className='flex justify-between gap-1 items-center'>
                                <Upload size={16} />
                                <input
                                    type="file"
                                    name="cv"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleChange}
                                    className="w-full hover:cursor-pointer"
                                />
                            </div>

                            {errors.cv && <p className="text-red-600 text-sm">{errors.cv}</p>}
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5 justify-between items-center'>

                        <div className='mt-5 md:mt-0 w-1/2'>
                            <label className="block text-gray-600">Password *</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                        </div>

                        <div className='mt-5 md:mt-0 w-1/2'>
                            <label className="block text-gray-600">Repeat Password *</label>
                            <input
                                type="password"
                                name="repeat_password"
                                value={formData.repeat_password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                            />
                            {errors.repeat_password && <p className="text-red-600 text-sm">{errors.repeat_password}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-5 flex w-full justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-black-800 hover:cursor-pointer hover:bg-gray-800 transition duration-200"
                    >
                        Submit
                    </button>

                    <p className='flex justify-center mt-5 text-sm text-gray-500'>Do you have an account? <Link to='/login' className='ml-2 text-black'> Sign In</Link> </p>

                </form>
            </div>

        </>
    );
}

export default SignUpForm;
