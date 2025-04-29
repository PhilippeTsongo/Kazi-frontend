import { useState } from "react";
import Sidebar from "../../components/User/Sidebar";
import { Link } from "react-router-dom";
import {Pencil} from "lucide-react"

function Profile() {

    const [activeTab, setActiveTab] = useState('first');

    return (
        <div className="h-screen bg-[#f8f8f8] px-10 pt-14 pb-5">
            <div className="flex gap-5 justify-between  rounded-lg ">

                <Sidebar />

                <div className="bg-white md:2/3 w-full rounded-lg shadow-sm px-5 py-5 text-sm">

                    {/* Tabs Navigation */}
                    <div className="flex border-b border-gray-300">
                        <button
                            className={`flex-1 py-2 text-center ${activeTab === 'first'
                                ? 'border-b-2 border-black font-semibold text-black'
                                : 'text-gray-500 hover:cursor-pointer'
                                }`}
                            onClick={() => setActiveTab('first')}
                        >
                            Profile
                        </button>
                        <button
                            className={`flex-1 py-2 text-center ${activeTab === 'second'
                                ? 'border-b-2 border-black font-semibold text-black'
                                : 'text-gray-500 hover:cursor-pointer'
                                }`}
                            onClick={() => setActiveTab('second')}
                        >
                            Applied jobs
                        </button>
                    </div>

                    {/* Tabs Content */}
                    <div className="py-10">
                        {activeTab === 'first' && (
                            <div>
                                <h3 className="text-md font-semibold">Summary</h3>
                                <p className="mt-5 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos commodi nesciunt reiciendis? Voluptates explicabo recusandae voluptate architecto et! Explicabo corrupti inventore qui repudiandae nemo, odit nihil repellat, iusto quo, temporibus magni! Fugiat facere ut velit at. Aperiam incidunt minima error.</p>

                                <div>
                                    <h3 className="text-md font-semibold mt-5">Skills</h3>
                                    <div className="flex gap-2 mt-2">
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">JavaScript</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">React</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Node.js</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Express.js</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">MongoDB</button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold mt-5">Experience</h3>
                                    <div className="flex gap-2 mt-2">
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Software Engineer</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Web Developer</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Full Stack Developer</button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-md font-semibold mt-5">Education</h3>
                                    <div className="flex gap-2 mt-2">
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Bachelor's Degree in Computer Science</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Master's Degree in Software Engineering</button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-md font-semibold mt-5">Certifications</h3>
                                    <div className="flex gap-2 mt-2">
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Certified JavaScript Developer</button>
                                        <button className="bg-gray-200 px-2 py-1 rounded-sm text-xs">Certified React Developer</button>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Link to="/profile/edit" className="flex gap-1 items-center justify-center w-24 px-5 py-2 bg-black text-white rounded-sm text-sm hover:cursor-pointer hover:bg-gray-800">
                                    
                                    <Pencil size={12}/> Edit</Link>
                                </div>
                            </div>
                        )}

                        {activeTab === 'second' && (
                            <div>
                                <h2 className="text-sm font-semibold mb-2">Applied jobs</h2>

                                <div className="flex flex-col">
                                    <div className="-m-1.5 overflow-x-auto">
                                        <div className="p-1.5 min-w-full inline-block align-middle">
                                            <div className="border border-gray-200 rounded-md overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200 ">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs text-gray-500 uppercase ">#</th>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs text-gray-500 uppercase ">Job title</th>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs text-gray-500 uppercase ">Job Type</th>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs text-gray-500 uppercase ">Salary</th>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs  text-gray-500 uppercase ">Date </th>
                                                            <th scope="col" className="px-6 py-3 text-start text-xs text-gray-500 uppercase "> Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr className="hover:bg-gray-100">
                                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 ">1</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 ">Django Software developer</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 ">Remote</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 ">29$/h</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 ">June 20th 2025</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-end text-xs">
                                                                Shortlisted
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>







                </div>
            </div>
        </div>
    )
}

export default Profile