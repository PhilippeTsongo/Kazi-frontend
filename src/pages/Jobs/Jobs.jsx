import FilterJobs from '../../components/Jobs/FilterJobs';
import { MapPin, Clock, Briefcase } from "lucide-react";
import Hero from '../../components/Hero';
import { Link } from "react-router-dom";
import url from '../../api/api';

function Jobs() {
    return (
        <>
            <Hero />

            <div className="md:flex md:justify-between gap-5 px-5 md:px-10 py-10 bg-[#f9fafb] rounded-md">
                <FilterJobs />
                <div className="mt-5 md:mt-0 md:w-3/4">
                    <div className="w-full px-5 py-5 bg-white rounded-lg shadow-sm">
                        <div className='flex justify-between items-center'>
                            <Link to='/jobDetail' className="text-lg font-bold hover:cursor-pointer">Software Developer</Link>
                            <span className='text-gray-400 text-sm'>1 day</span>
                        </div>

                        <h4 className="text-md">Tech Corp</h4>
                        <ul className='flex gap-5 text-gray-500 text-sm mt-5'>
                            <li className='flex items-center gap-1'>
                                <div><MapPin size={16} /> </div>
                                <div>Texas</div>
                            </li>
                            <li className='flex items-center gap-1'>
                                <div><Clock size={16} /> </div>
                                <div>Full-time</div>
                            </li>
                            <li className='flex items-center gap-1'>
                                <div><Briefcase size={16} /> </div>
                                <div>Mid-level</div>
                            </li>
                        </ul>

                        <p className='mt-5 text-gray-500 text-sm hover:cursor-pointer'>
                            We are seeking a passionate and skilled Software Developer to join our growing team. As a Software Developer, you will be responsible for designing, developing, and maintaining high-quality software applications that solve real-world problems and deliver outstanding user experiences. You'll collaborate with cross-functional teams, contribute to system architecture, and continuously improve codebase quality.
                        </p>

                        <div className='flex justify-end mt-2'>
                            <Link to='/jobApplication' className="bg-black text-white px-2 py-1 rounded-md hover:cursor-pointer">
                                Apply now
                            </Link>
                        </div>
                    </div>

                    <div className="mt-5 w-full px-5 py-5 bg-white rounded-lg shadow-sm">
                        <div className='flex justify-between items-center'>

                            <Link to='/jobDetail' className="text-lg font-bold hover:cursor-pointer">Software Developer</Link>
                            <span className='text-gray-400 text-sm'>1 day</span>
                        </div>

                        <h4 className="text-md">Tech Corp</h4>
                        <ul className='flex gap-5 text-gray-500 text-sm mt-5'>
                            <li className='flex items-center gap-1'>
                                <div><MapPin size={16} /> </div>
                                <div>Texas</div>
                            </li>
                            <li className='flex items-center gap-1'>
                                <div><Clock size={16} /> </div>
                                <div>Full-time</div>
                            </li>
                            <li className='flex items-center gap-1'>
                                <div><Briefcase size={16} /> </div>
                                <div>Mid-level</div>
                            </li>
                        </ul>

                        <p className='mt-5 text-gray-500 text-sm hover:cursor-pointer'>
                            We are seeking a passionate and skilled Software Developer to join our growing team. As a Software Developer, you will be responsible for designing, developing, and maintaining high-quality software applications that solve real-world problems and deliver outstanding user experiences. You'll collaborate with cross-functional teams, contribute to system architecture, and continuously improve codebase quality.
                        </p>

                        <div className='flex justify-end mt-2'>
                            <Link to='/jobApplication' className="bg-black text-white px-2 py-1 rounded-md hover:cursor-pointer">
                                Apply now
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Jobs;