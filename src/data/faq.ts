export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  linkText?: string;
  link?: string;
}

export interface FAQData {
  heading: string;
  items: FAQItem[];
}

export const faqData: FAQData = {
  heading: "Frequently Asked Questions",

  items: [
    {
      id: 1,
      question: "How do I start using Jetpack on my website?",
      answer:
        "Learn everything you need to know about getting started with Jetpack",
      linkText: "here.",
      link: "#",
    },

    {
      id: 2,
      question:
        "Can I use Jetpack Scan to fix a site that is already infected?",
      answer:
        "Jetpack Protect (Scan) detects and prevents attacks, but is not designed to fully clean up sites infected before it was active. If your site has malware, take immediate action to clean it up and remove the malicious code To clean up your site, we suggest using a malware removal tool, or if possible restore from a backup taken before the infection. We recommend using Jetpack VaultPress Backup in conjunction with Jetpack Scan to secure your website",
      linkText: "Learn more about cleaning your site.",
      link: "#",
    },

    {
      id: 3,
      question: "How do backup storage limits work?",
      answer:
        "If your backup storage limit is reached, older backups will be deleted and, depending on your site’s size, the backup retention period (archive) might be reduced to 7 days. This will affect how far back you can see backups in your activity log. Existing backups can still be restored, but new updates won’t be backed up until you upgrade or free up storage.",
    },

    {
      id: 4,
      question: "Is priority support included in all plans?",
      answer:
        "Yes, our expert Happiness Engineers provide priority support to all customers with paid plans and services! Have a question or a problem?.",
      linkText: "Contact support.",
      link: "#",
    },

    {
      id: 5,
      question: "What is your cancellation policy?",
      answer:
        "If you are dissatisfied for any reason, we offer full refunds within 14 days for yearly plans, and within 7 days for monthly plans. If you have a question about our paid plans,",
      linkText: "Please Let us know!",
      link: "#",
    },

    {
      id: 6,
      question: "Do you have any discounts for multiple sites?",
      answer:
        "Anyone with at least five websites can join our licensing platform and enjoy up to 60% discount across all Jetpack products! You can learn more about our.",
      linkText: "licensing platform and agency program here.",
      link: "#",
    },

    {
      id: 7,
      question: "Do you have discounts for multi-year plans?",
      answer:
        "We currently do not offer multi-year subscriptions or discounts for Jetpack products. However if you're an Enterprise,",
      linkText: "Contact us.",
      link: "#",
    },

    {
      id: 8,
      question: "Why do I need a WordPress.com account?",
      answer:
        "Many of Jetpack’s core features make use of the WordPress.com cloud. In order to make sure everything works correctly, Jetpack requires you to connect a free WordPress.com account. If you don’t already have an account you can easily create one during the connection process.",
    },

    {
      id: 9,
      question: "What are the hosting requirements?",
      answer:
        "You should be running the latest version of WordPress and a publicly-accessible site with XML-RPC enabled.",
    },

    {
      id: 10,
      question: "Does Jetpack work with a multisite network?",
      answer:
        "Jetpack’s free features are compatible with WordPress Multisite networks. Most paid features also work with Multisite networks, but each site requires its own subscription. Ad network is an exception and will only work with the main site. Jetpack VaultPress Backup, Jetpack Scan, Jetpack Security, and Jetpack Complete are not currently compatible with Multisite networks.",
    },

    {
      id: 11,
      question: "Does Jetpack comply with the GDPR?",
      answer:
        "Jetpack understands the General Data Protection Regulation.",
      linkText: "Read more about how Jetpack is committed to operating in accordance with the GDPR.",
      link: "#",
    },

    {
      id: 12,
      question: "Have more questions?",
      answer:
        "No problem! Feel free with our Happiness Engineers to",
        linkText: "get in touch.",
        link: "#",
    },
  ],
};