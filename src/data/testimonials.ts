export interface Testimonial {
	id: number;
	quote: string;
	name: string;
	role: string;
	image: string;
}

export const testimonials: Testimonial[] = [
	{
		id: 1,
		quote: "Millions of people depend on my site, and downtime isn’t an option. Jetpack handles my site security and backups so I can focus on creation.",
		name: "Tim Ferriss",
		role: "Author / Investor / Podcaster",
		image: "/images/testimonial-1.png"
	}, {
		id: 2,
		quote: "Jetpack gives me peace of mind knowing my content is protected and my site stays online.",
		name: "John Smith",
		role: "Founder / Creator",
		image: "/images/testimonial-2.png"
	}, {
		id: 3,
		quote: "The backup and security features have saved us countless hours and prevented major issues.",
		name: "Sarah Wilson",
		role: "CEO / Entrepreneur",
		image: "/images/testimonial-3.png"
	},
];
