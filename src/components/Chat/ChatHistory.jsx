import { Filter } from "lucide-react";
function  ChatHistory() {
    return (
        <div className="md:w-68 h-100 px-5 py-5 bg-white rounded-lg shadow-sm">
            <div className="flex justify-left gap-2 items-center">
                <Filter size={16}/>
                <h3 className="text-lg font-bold"> Chat histories</h3>
            </div>

            <div className="text-sm text-gray-600">
                <p className="mt-3 bg-gray-100 px-2 py-2 rounded-md hover:cursor-pointer transition duration-500 hover:bg-gray-300">Refine the this document ...</p>
                <p className="mt-3 bg-gray-100 px-2 py-2 rounded-md hover:cursor-pointer transition duration-500 hover:bg-gray-300">Refine the this document ...</p>
                <p className="mt-3 bg-gray-100 px-2 py-2 rounded-md hover:cursor-pointer transition duration-500 hover:bg-gray-300">Refine the this document ...</p>
            
            </div>

        </div>
    );
}

export default ChatHistory;