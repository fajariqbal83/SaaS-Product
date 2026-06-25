import wordpressLogo from "../../public/logos/wordpress.png";

export interface SocialButton {
  id: number;
  text: string;

}

export interface LoginLinks {
  forgotPassword: string;
  back: string;
  createAccount: string;
}

export interface LoginData {
  logo: string;
  title: string;
  description: string;
  inputLabel: string;
  continueButton: string;
  socialButtons: SocialButton[];
  links: LoginLinks;
}

export const loginData: LoginData = {
  logo: wordpressLogo,

  title: "Log in to Jetpack Cloud with WordPress.com",

 description:
  "By continuing with any of the options below, you agree to our ",

  inputLabel: "Email address or username",

  continueButton: "Continue",

  socialButtons: [
    {
      id: 1,
      text: "Continue with Google",
   
    },
    {
      id: 2,
      text: "Continue with Apple",
     
    },
    {
      id: 3,
      text: "Continue with GitHub",
     
    },
  ],

  links: {
    forgotPassword: "Lost your password?",
    back: "Back to Jetpack Cloud",
    createAccount: "Create an account",
  },
};