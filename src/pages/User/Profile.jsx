import { Phone, MapPin, Mail } from "lucide-react"
import { useState } from "react";

function Profile() {

    const [activeTab, setActiveTab] = useState('first');

    return (
        <div className="flex gap-5 h-screen justify-between  px-10 pt-14 pb-5 rounded-lg bg-[#f8f8f8] shadow-xs">
            <div className="md:w-1/3 w-full bg-white rounded-lg shadow-sm px-5 py-5">
                <div className="flex justify-center items-center">
                    <img src="user-profile.avif" className="border border-gray-200 rounded-full md:w-34 md:h-34" />
                </div>
                <div className="flex mt-8 justify-center">
                    <h3 className="font-semibold text-sm">Philippe Tahakava Tsongo</h3>
                </div>
                <div className="flex mt-3 justify-center">
                    <button className="px-5 py-1 bg-black text-white rounded-sm text-sm hover:cursor-pointer hover:bg-gray-800">Edit</button>
                </div>

                <div className="mt-5 rounded-lg py-5 text-sm">
                    <h3 className="text-md font-semibold px-1">Contact Information</h3>
                    <div className="w-full text-gray-700">
                        <div className="flex gap-1 justify-between px-1 py-1 mt-5 hover:bg-gray-200 rounded">
                            <div className="flex items-center gap-1">
                                <Mail size={14} />
                                Email:
                            </div>
                            <div>philippetsongo90@gmail.com</div>
                        </div>
                        <div className="flex gap-1 justify-between px-1 py-1 hover:bg-gray-200 rounded">
                            <div className="flex items-center gap-1">
                                <Phone size={14} />
                                Phone:
                            </div>
                            <div>+250783793095</div>
                        </div>
                        <div className="flex gap-1 justify-between px-1 py-1 hover:bg-gray-200 rounded">
                            <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                City:
                            </div>
                            <div>Kigali</div>
                        </div>
                        <div className="flex gap-1 justify-between px-1 py-1 hover:bg-gray-200 rounded">
                            <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                Country:
                            </div>
                            <div>Rwanda</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white md:2/3 w-full rounded-lg shadow-sm px-5 py-5 text-sm">

                {/* Tabs Navigation */}
                <div className="flex border-b border-gray-300">
                    <button
                        className={`flex-1 py-2 text-center ${activeTab === 'first'
                            ? 'border-b-2 border-black font-semibold text-black'
                            : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab('first')}
                    >
                        Profile
                    </button>
                    <button
                        className={`flex-1 py-2 text-center ${activeTab === 'second'
                            ? 'border-b-2 border-black font-semibold text-black'
                            : 'text-gray-500'
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
                        </div>
                    )}

                    {activeTab === 'second' && (
                        <div>
                            <h2 className="text-sm font-semibold mb-2">Applied jobs</h2>

                            <div class="flex flex-col">
                                <div class="-m-1.5 overflow-x-auto">
                                    <div class="p-1.5 min-w-full inline-block align-middle">
                                        <div class="border border-gray-200 rounded-lg overflow-hidden">
                                            <table class="min-w-full divide-y divide-gray-200 ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Name</th>
                                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Age</th>
                                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Address</th>
                                                        <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-gray-200">
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">John Brown</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">45</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">New York No. 1 Lake Park</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-black focus:outline-hidden focus:text-black disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Jim Green</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">27</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">London No. 1 Lake Park</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-black focus:outline-hidden focus:text-black disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Joe Black</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">31</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">Sidney No. 1 Lake Park</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:text-black focus:outline-hidden focus:text-black disabled:opacity-50 disabled:pointer-events-none">Delete</button>
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

    )
}

export default Profile