function MultiInputCert({data, formData, setFormData, label}) {
    return (
        <div>
            {data.map((cert, index) => (
                <div key={index} className="flex gap-2 mb-2">
                    <input
                        type="text"
                        placeholder={label}
                        value={cert.name}
                        onChange={(e) => {
                            const updated = [...formData.certificates];
                            updated[index].name = e.target.value;
                            setFormData({ ...formData, certificates: updated });
                        }}
                        className="w-2/4 p-2 border rounded border-gray-300 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        value={cert.year}
                        onChange={(e) => {
                            const updated = [...formData.certificates];
                            updated[index].year = e.target.value;
                            setFormData({ ...formData, certificates: updated });
                        }}
                        className="w-1/4 p-2 border rounded border-gray-300 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            const updated = formData.certificates.filter((_, i) => i !== index);
                            setFormData({ ...formData, certificates: updated });
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
                        certificates: [...formData.certificates, { name: '', year: '' }]
                    })
                }
                className="mt-2 text-gray-800 underline hover:cursor-pointer"
            >
                + Add {label}
            </button>

        </div>
    )
}

export default MultiInputCert;