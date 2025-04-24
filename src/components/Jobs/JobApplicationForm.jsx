import React, { useState } from 'react';
import { Upload } from "lucide-react";

function JobApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        hireMe: '',
        cv: null,
        coverLetter: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'cv' || name === 'coverLetter') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.hireMe.trim()) newErrors.hireMe = 'This field is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.cv) newErrors.cv = 'CV is required';

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
        <form onSubmit={handleSubmit} className="w-full px-5 md:px-10 py-5 md:py-10 bg-white rounded-lg shadow">

            <p className='text-gray-600'>Complete the form below to submit your application</p>
            <div className='mt-5 md:flex md:justify-between gap-4 items-center'>
                <div className='mt-5 md:mt-0 md:w-1/3'>
                    <label className="block text-gray-600">Full Name*</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                </div>
                <div className='mt-5 md:mt-0 md:w-1/3'>
                    <label className="block text-gray-600">Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div className='mt-5 md:mt-0 md:w-1/3'>
                    <label className="block text-gray-600">Phone*</label>
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

            <div className='w-full mt-5'>
                <label className="block text-gray-600">Why should we hire you *</label>
                <textarea
                    type="text"
                    name="hireMe"
                    value={formData.hireMe}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                />
                {errors.hireMe && <p className="text-red-600 text-sm">{errors.hireMe}</p>}
            </div>

            <div className='mt-5'>
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

            <div className='mt-5'>
                <label className="block  text-gray-600">Cover Letter (optional)</label>
                <div className='flex justify-between gap-1 items-center'>
                    <Upload size={16} />
                    <input
                        type="file"
                        name="coverLetter"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full hover:cursor-pointer"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-5 flex w-full justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-black-800 transition duration-200 hover:cursor-pointer"
            >
                Submit Application
            </button>
        </form>
    );
}

export default JobApplicationForm;
