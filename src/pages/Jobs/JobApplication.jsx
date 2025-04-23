import { MapPin, Clock, Briefcase } from "lucide-react";
import JobApplicationForm from "../../components/Jobs/JobApplicationForm";

function JobApplication() {
    return (
        <>
        <div className="bg-black text-center px-8 md:px-10 py-10 md:py-14 md:mt-5 mt-14">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Software developer
            </h1>
            <ul className='flex justify-center items-center gap-5 text-gray-400 text-sm mt-5'>
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
        </div>
        <div className="px-5 md:px-10 py-5 md:py-10 bg-[#f9fafb]">
            <JobApplicationForm/>
        </div>
        </>
    );
}

export default JobApplication;