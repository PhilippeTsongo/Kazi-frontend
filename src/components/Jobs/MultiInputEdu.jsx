function MultiInputEdu({data, formData, setFormData, label}) {
    return (
        <div>
            {data.map((education, index) => (
                <div key={index} className="flex gap-2 mb-2">
                    <input
                        type="text"
                        placeholder={label}
                        value={education.school_name}
                        onChange={(e) => {
                            const updated = [...formData.educations];
                            updated[index].school_name = e.target.value;
                            setFormData({ ...formData, educations: updated });
                        }}
                        className="w-2/4 p-2 border rounded border-gray-300 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Year of completion"
                        value={education.year_of_completion}
                        onChange={(e) => {
                            const updated = [...formData.educations];
                            updated[index].year_of_completion = e.target.value;
                            setFormData({ ...formData, educations: updated });
                        }}
                        className="w-1/4 p-2 border rounded border-gray-300 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            const updated = formData.educations.filter((_, i) => i !== index);
                            setFormData({ ...formData, educations: updated });
                        }}
                        className="w-1/4 text-red-600 font-bold px-2 rounded-md hover:cursor-pointer"
                    >
                        ×
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={() =>
                    setFormData({
                        ...formData,
                        educations: [...formData.educations, { school_name: '', year_of_completion: '' }]
                    })
                }
                className="mt-2 text-gray-800 underline hover:cursor-pointer"
            >
                + Add {label}
            </button>

        </div>
    )
}

export default MultiInputEdu;