import LoginForm from "../../components/User/LoginForm";

function Login() {
    return (
        <div className="">
            <div className="bg-black text-center px-8 md:px-10 py-10 md:py-10 md:mt-5 mt-14">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Login
                </h1>
                <p className='text-gray-600 text-sm'>Complete the form below to login</p>
            </div>
            <div className="px-5 md:px-10 py-5 md:py-10 bg-[#f9fafb]">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;