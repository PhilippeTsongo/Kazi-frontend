import React, { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import {Link} from "react-router-dom";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

    };

    const validate = () => {
        const newErrors = {};
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
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
        <form onSubmit={handleSubmit} className="md:w-2/4 mx-auto px-5 md:px-10 py-5 md:py-10 bg-white rounded-lg shadow">

            <div className=''>
                <div className=''>
                    <label className="block text-gray-600">Email </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div className='mt-5'>
                    <label className="block text-gray-600">Password </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                </div>
            </div>

            <button
                type="submit"
                className="mt-5 flex w-full justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-black-800 hover:cursor-pointer hover:bg-gray-800 transition duration-200"
            >
                Login
            </button>

            <p className='flex justify-center mt-5 text-sm'>Or</p>
            <button className='flex items-center gap-2 w-full mt-3 px-2  py-2 justify-center border border-gray-200 rounded-lg text-gray-500 hover:cursor-pointer hover:bg-gray-100 transition duration-200'> 
                <SiGoogle size={14} color="red" /> Connect with Google     
            </button>
            <p className='flex justify-center mt-5 text-sm text-gray-500'>Don't have an account? <Link to='/signup' className='ml-2 text-black'> Signup</Link> </p>
    
        </form>
    );
}

export default LoginForm;
