function MultiInputExperience({ data, formData, setFormData, label }) {
    return (
        <div className="">
            {data.map((experience, index) => (
                <div key={index} className="mb-5 pb-5 border-b border-gray-300">
                    <div className="flex justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Company name"
                            value={experience.campany_name}
                            onChange={(e) => {
                                const updated = [...formData.jobExperiences];
                                updated[index].campany_name = e.target.value;
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-1/2 p-2 border rounded border-gray-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Job title"
                            value={experience.job_title}
                            onChange={(e) => {
                                const updated = [...formData.jobExperiences];
                                updated[index].job_title = e.target.value;
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-1/2 p-2 border rounded border-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-between gap-2 mt-5">
                        <textarea
                            placeholder="Summary"
                            value={experience.summary}
                            onChange={(e) => {
                                const updated = [...formData.jobExperiences];
                                updated[index].summary = e.target.value;
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-1/2 p-2 border rounded border-gray-300 focus:outline-none">
                        </textarea>
                    </div>
                    <div className="flex md:w-2/4 w-full  justify-between gap-2 mt-2">
                        <input
                            type="text"
                            placeholder="Start date"
                            value={experience.from_date}
                            onChange={(e) => {
                                const updated = [...formData.jobExperiences];
                                updated[index].from_date = e.target.value;
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-2/4 p-2 border rounded border-gray-300 focus:outline-none"
                        />

                        <input
                            type="text"
                            placeholder="End date"
                            value={experience.from_date}
                            onChange={(e) => {
                                const updated = [...formData.jobExperiences];
                                updated[index].from_date = e.target.value;
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-2/4 p-2 border rounded border-gray-300 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const updated = formData.jobExperiences.filter((_, i) => i !== index);
                                setFormData({ ...formData, jobExperiences: updated });
                            }}
                            className="w-1/4 text-red-600 font-bold  px-2 rounded-md hover:cursor-pointer"
                        >
                            ×
                        </button>
                    </div>

                </div>
            ))}

            <button
                type="button"
                onClick={() =>
                    setFormData({
                        ...formData,
                        jobExperiences: [...formData.jobExperiences, { name: '', year: '' }]
                    })
                }
                className="mt-2 text-gray-800 underline hover:cursor-pointer"
            >
                + Add {label}
            </button>

        </div>
    )
}

export default MultiInputExperience;