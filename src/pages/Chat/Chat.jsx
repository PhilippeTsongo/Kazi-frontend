import ChatHistory from '../../components/Chat/ChatHistory'
import { Send } from "lucide-react"

function Chat() {
    return (
        <div className="md:flex md:justify-between gap-5 px-5 md:px-10 py-24 md:py-14 rounded-md bg-[#f9fafb] h-screen">

            <ChatHistory />

            <div className="mt-5 md:mt-0 md:w-3/4">

                <div className="bg-black text-center px-8 md:px-10 py-5 md:py-14 md:mt-0 mt-10 rounded-md">
                    <h1 className="text-lg md:text-xl font-bold text-white mb-4">
                        Welcome to Kazi Chat bot
                    </h1>
                    <p className='text-gray-300'>Do you need any orientation or advice regarding your career?</p>
                    <p className='text-gray-300'>What are you waiting for? Ask Kazi any question </p>
                </div>

                <form className="w-full bg-white rounded-lg mt-5">
                    <div className='relative flex justify-between items-center'>
                        <div className='w-full h-44 px-3 py-3 rounded-md text-sm text-gray-600 bg-gray-200'>
                            <textarea
                                type="text"
                                placeholder='Type your message below'
                                name="message"
                                className="w-full h-40 focus:outline-none"
                            />
                        </div>
                        <div className='mt-2'>
                            <button 
                            type="submit" 
                            className="absolute top-28 right-4  bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer  hover:bg-gray-800">
                                <Send className='transform rotate-45' />
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Chat;