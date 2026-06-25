import wordpressLogo from "../../public/logos/wordpress.png";

export interface SocialButton {
  id: number;
  text: string;
}

export interface CreateAccountLinks {
  login: string;
}

export interface CreateAccountData {
  logo: string;
  title: string;
  description: string;
  inputLabel: string;
  continueButton: string;
  socialButtons: SocialButton[];
  links: CreateAccountLinks;
}

export const createAccountData: CreateAccountData = {
  logo: wordpressLogo,

  title: "Sign up for Jetpack Cloud with WordPress.com",

  description:
    "By continuing with any of the options below, you agree to our ",

  inputLabel: "Your email",

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
    login: "Log in",
  },
};