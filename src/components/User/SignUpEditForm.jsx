import React, { useState } from 'react';
import Select from 'react-select';
import MultiInputCert from '../Jobs/MultiInputCert';
import MultiInputEdu from '../Jobs/MultiInputEdu';
import MultiInputExperience from '../Jobs/MultiInputExperience'

function SignUpEditForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        cv: null,
        skills: [],
        jobExperiences: [{company_name: '', job_title: '', from_date: '', end_date: '', summary: ''}],
        educations: [{ school_name: '', year_of_completion: '' }],
        certificates: [{ name: '', year: '' }],
        
    });

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
            if (!formData.email.trim()) newErrors.email = 'Email is required';
            if (!formData.gender.trim()) newErrors.gender = 'Gender is required';
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
            if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        } else if (step === 2) {
            if (formData.skills.length === 0) newErrors.skills = 'Select at least one skill';
            if (formData.educations.length === 0) newErrors.educations = 'Education is required';
            if (formData.jobExperiences.length === 0) newErrors.jobExperiences = 'Experience is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) setStep(step + 1);
    };

    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        const payload = {
            ...formData,
            skills: formData.skills.map(s => s.value),
            jobExperiences: formData.jobExperiences.map(p => p.value),
            educations: formData.educations.map(e => e.value),
            certificates: formData.certificates.map(c => c.value),
            areasOfExpertises: formData.areasOfExpertises.map(a => a.value),
        };

        console.log('Submitted:', payload);
    };

    const skillOptions = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },
    ];

    const areasOfExpertiseOptions = [
        { value: 'Web Development', label: 'Web Development' },
        { value: 'Data Science', label: 'Data Science' },
        { value: 'DevOps', label: 'DevOps' },
    ];

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow text-sm text-gray-600">
            {step === 1 && (
                <>
                    <h2 className="text-md font-semibold mb-4">Personal Information 1/2</h2>
                    <div className='flex gap-5 justify-between'>
                        <div className="md:w-1/2 w-full mb-4 text-sm">
                            <label>Full Name</label>
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 text-gray-600 rounded focus:outline-none"
                            />
                            {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
                        </div>

                        <div className="md:w-1/2 w-full mb-4">
                            <label>Gender</label>
                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-3 py-2 text-gray-600 rounded focus:outline-none"
                                required
                            >
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}

                        </div>
                    </div>
                    <div className='flex gap-5 justify-between'>
                        <div className="md:w-1/2 w-full mb-4">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded text-gray-600 border-gray-300 focus:outline-none"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>
                        <div className="md:w-1/2 w-full mb-4">
                            <label>Phone</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded text-gray-600 border-gray-300 focus:outline-none "
                            />
                            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:cursor-pointer"
                    >
                        Next
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <h2 className="text-sm font-semibold text-gray-600 mb-4">Skills & Experience 2/2</h2>
                    <div className='flex gap-5 justify-between'>
                        <div className="md:w-1/2 w-full mb-4">

                            <label>Skills</label>
                            <Select
                                isMulti
                                name='skills'
                                options={skillOptions}
                                value={formData.skills}
                                onChange={(selected) => setFormData({ ...formData, skills: selected })}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            {errors.skills && <p className="text-red-600 text-sm">{errors.skills}</p>}
                        </div>

                        <div className="md:w-1/2 w-full mb-4">
                            <label>Job interest</label>
                            <Select
                                isMulti
                                name="areasOfExpertises"
                                options={areasOfExpertiseOptions}
                                value={formData.areasOfExpertises}
                                onChange={(selected) => setFormData({ ...formData, areasOfExpertises: selected })}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            {errors.areasOfExpertises && <p className="text-red-600 text-sm">{errors.areasOfExpertises}</p>}
                        </div>

                    </div>
                    
                    <div className='flex gap-5 justify-between'>
                        <div className="md:w-1/2 w-full mb-4">
                            <label className="block mb-2">Education</label>
                            <MultiInputEdu
                                data={formData.educations}
                                formData={formData}
                                setFormData={setFormData}
                                label={"Education"}
                            />
                        </div>

                        <div className="md:w-1/2 w-full mb-4">
                            <label className="block mb-2">Certificates</label>
                            <MultiInputCert
                                data={formData.certificates}
                                formData={formData}
                                setFormData={setFormData}
                                label={"Certifaction"}

                            />

                        </div>
                    </div>

                    <div className='flex gap-5 justify-between mt-5'>
                        <div className="w-full mb-4">
                            <label className="block mb-2">Experience</label>
                            <MultiInputExperience
                                data={formData.jobExperiences}
                                formData={formData}
                                setFormData={setFormData}
                                label={"Experiences"}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:cursor-pointer"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-800"
                        >
                            Submit
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}

export default SignUpEditForm;
