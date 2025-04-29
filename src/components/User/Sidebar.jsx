import { Phone, MapPin, Mail } from "lucide-react"

function Sidebar() {
    return (
        <div className="md:w-1/3 h-105 w-full bg-white rounded-lg shadow-sm px-5 py-5">
            <div className="flex justify-center items-center">
                <img src="user-profile.avif" className="border border-gray-200 rounded-full md:w-34 md:h-34" />
            </div>
            <div className="flex mt-8 justify-center">
                <h3 className="font-semibold text-sm">Philippe Tahakava Tsongo</h3>
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
    )
}

export default Sidebar