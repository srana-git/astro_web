import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'JZ',
	favicon: 'favicon.ico',
	owner: 'Jumshaid Zee',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
	],
};
