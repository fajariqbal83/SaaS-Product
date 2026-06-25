import { ArrowLeft, Zap } from "lucide-react";
import { loginData } from "../data/loginData";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-[#f6f7f7]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-6 gap-4 sm:gap-0">
                <img
                    src={loginData.logo}
                    alt="WordPress"
                    className="h-8 w-auto"
                />

                <a
                    href="/create-account"
                    className="text-base sm:text-lg underline"
                >
                    {loginData.links.createAccount}
                </a>
            </div>
            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-12">
                {/* Top Icons */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
                    <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">
                        <Zap
                            size={18}
                            fill="currentColor"
                            strokeWidth={1.5}
                            className="text-white"
                        />
                    </div>

                    <div className="text-2xl font-bold">+</div>

                    <img
                        className="w-12 h-12 object-contain"
                        src="logos/wordpress icon.png"
                        alt="WordPress"
                    />
                </div>

                {/* Heading */}
                <div className="text-center mt-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-3xl mx-auto leading-tight">
                        {loginData.title}
                    </h1>

                    <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {loginData.description}

                        <a href="#" className="underline">
                            Terms of Service
                        </a>

                        {" "}and have read our{" "}

                        <a href="#" className="underline">
                            Privacy Policy
                        </a>.
                    </p>
                </div>

                {/* Form Area */}
                <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center max-w-5xl mx-auto">
                    {/* Left Side */}
                    <div>
                        <label className="block mb-3 font-medium text-lg">
                            {loginData.inputLabel}
                        </label>

                        <input
                            type="text"
                            className="w-full h-14 border border-green-600 rounded px-4 outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <button className="w-full mt-6 bg-green-700 text-white h-14 rounded hover:bg-green-800 transition">
                            {loginData.continueButton}
                        </button>
                    </div>

                    {/* OR */}
                    <div className="flex md:flex-col items-center justify-center gap-4">
                        <div className="h-px w-20 md:w-px md:h-12 bg-gray-300"></div>

                        <span className="text-gray-500 font-medium">
                            OR
                        </span>

                        <div className="h-px w-20 md:w-px md:h-12 bg-gray-300"></div>
                    </div>


                    {/* Right Side */}
                    <div className="space-y-4 md:space-y-5">
                        <button className="w-full border h-14 rounded flex items-center justify-center gap-3 px-4 hover:bg-gray-50 transition">
                            <img
                                src="logos/google.png"
                                alt="Google"
                                className="w-6 h-6"
                            />
                            Continue with Google
                        </button>

                        <button className="w-full border h-14 rounded flex items-center justify-center gap-3 px-4 hover:bg-gray-50 transition">
                            <img
                                src="logos/apple-logo.png"
                                alt="Apple"
                                className="w-6 h-6"
                            />
                            Continue with Apple
                        </button>

                        <button className="w-full border h-14 rounded flex items-center justify-center gap-3 px-4 hover:bg-gray-50 transition">
                            <img
                                src="logos/github-logo.png"
                                alt="GitHub"
                                className="w-6 h-6"
                            />
                            Continue with GitHub
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="text-center mt-12 md:mt-20 space-y-5 md:space-y-6 pb-8">
                    <a
                        href="#"
                        className="block underline font-medium text-base sm:text-lg"
                    >
                        {loginData.links.forgotPassword}
                    </a>

                    <a
                        href="/"
                        className="flex items-center justify-center gap-2 font-medium text-base sm:text-lg"
                    >
                        <ArrowLeft size={20} />
                        <span>{loginData.links.back}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;