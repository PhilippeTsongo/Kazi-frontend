import SignUpForm from "../../components/User/SignUpForm";

function SignUp() {
    return (
        <div className="md:flex justify-between gap-5 bg-[#f9fafb]">
            
            
            <div className="px-5 w-full md:px-10 py-5 md:py-24">
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp;