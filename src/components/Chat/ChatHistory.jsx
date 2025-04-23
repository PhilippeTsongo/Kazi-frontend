import { Filter } from "lucide-react";
function  ChatHistory() {
    return (
        <div className="md:w-68 h-100 px-5 py-5 bg-white rounded-lg shadow-sm">
            <div className="flex justify-left gap-2 items-center">
                <Filter size={16}/>
                <h3 className="text-lg font-bold"> Chat histories</h3>
            </div>

            <div className="mt-5 text-sm text-gray-500">
                <p>Refine the this document ...</p>
            </div>

        </div>
    );
}

export default ChatHistory;