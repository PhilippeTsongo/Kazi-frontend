import { Search, MapPin } from "lucide-react"

function Hero() {
    return (
        <div className="bg-black text-center px-8 md:px-10 py-10 md:py-14 md:mt-5 mt-14">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Find you next career with Kazi
            </h1>
            <p className="text-md md:text-lg text-gray-400 mb-8">
                We help you find the best jobs in the world
            </p>

            <form className="md:flex justify-center gap-3 px-5 py-5 mb-8 bg-white rounded-lg shadow-lg">
                <div className="relative md:w-1/3">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
                    <input
                        type="search"
                        placeholder="Search for jobs or companies"
                        className="relative w-full border border-gray-200 pl-8 px-4 py-2 md:py-3 rounded-md focus:outline-none"
                    />
                </div>

                <div className="mt-5 md:mt-0 relative md:w-1/3">
                    <MapPin size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full border border-gray-200 pl-8 py-2 md:py-3 px-4 rounded-md focus:outline-none"
                    />
                </div>
                <button className="mt-5 md:mt-0 relative w-full md:w-1/3 bg-black hover:bg-gray-800 transition text-white px-4 py-2 md:py-3 rounded-md hover:cursor-pointer">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Hero;