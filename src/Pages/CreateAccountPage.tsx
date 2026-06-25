import { Zap } from "lucide-react";
import { createAccountData } from "../data/createaccount";

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f7]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
        <img
          src={createAccountData.logo}
          alt="WordPress"
          className="h-8 w-auto"
        />

        <a
          href="/login"
          className="underline text-base sm:text-lg"
        >
          {createAccountData.links.login}
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 pt-16 pb-10">
        {/* Logos */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
            <Zap
              size={20}
              fill="currentColor"
              className="text-white"
            />
          </div>

          <div className="text-2xl font-bold">+</div>

          <img
            src="logos/wordpress icon.png"
            alt=""
            className="w-10 h-10"
          />
        </div>

        {/* Title */}
        <div className="text-center mt-8">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            {createAccountData.title}
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            {createAccountData.description}

            <a href="#" className="underline">
              Terms of Service
            </a>

            {" "}and have read our{" "}

            <a href="#" className="underline">
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* Email */}
        <div className="mt-10">
          <label className="block mb-3 font-medium">
            {createAccountData.inputLabel}
          </label>

          <input
            type="email"
            className="w-full h-12 border border-gray-300 rounded px-4 outline-none focus:border-blue-500"
          />

          <button className="w-full mt-4 h-12 bg-green-700 text-white rounded hover:bg-green-800 transition">
            {createAccountData.continueButton}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full h-12 border rounded flex items-center justify-center gap-3">
            <img
              src="logos/google.png"
              alt=""
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <button className="w-full h-12 border rounded flex items-center justify-center gap-3">
            <img
              src="logos/apple-logo.png"
              alt=""
              className="w-5 h-5"
            />
            Continue with Apple
          </button>

          <button className="w-full h-12 border rounded flex items-center justify-center gap-3">
            <img
              src="logos/github-logo.png"
              alt=""
              className="w-5 h-5"
            />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;