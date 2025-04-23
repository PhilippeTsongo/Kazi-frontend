import { Filter } from "lucide-react";
function FilterJobs() {
    return (
        <div className="md:w-68 h-100 px-5 py-5 bg-white rounded-lg shadow-sm">
            <div className="flex justify-left gap-2 items-center">
                <Filter size={16}/>
                <h3 className="text-lg font-bold">Filter Jobs</h3>
            </div>

            <div className="mt-5 text-sm">
                <h4 className="text-lg font-semibold mb-2">Job Type</h4>
                <div className="mb-2">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Full-time
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Part-time
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Internship
                    </label>
                </div>
            </div>

            <div className="text-sm mt-5">
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <div className="mb-2">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Remote
                    </label>
                </div>
                <div className="mb-4">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        On-site
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FilterJobs;