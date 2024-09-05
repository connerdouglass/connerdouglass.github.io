import type { IProject } from '../components/project';

export const Work: IProject[] = [
	{
		title: 'Tanium',
		subtitle: 'Senior Software Engineer',
		period: '11/2021 – now',
		url: 'https://tanium.com',
		description: [
			'I am a senior software engineer at Tanium doing backend work, with a focus on cloud services and content delivery.'
		],
		logo: '/logos/tanium.svg',
		images: [],
		tags: ['golang', 'docker']
	},
	{
		title: 'Spire Technology',
		subtitle: 'Founder & CTO',
		period: '08/2019 – now',
		url: 'https://spiretechnology.com',
		description: [
			"Spire Technology is a full suite of workflow tools for television post-production teams. It is currently in use 24/7 by several of the world's largest reality TV productions."
		],
		logo: '/logos/spire.svg',
		images: [
			'/gallery/spiredelta/library.png',
			'/gallery/spiredelta/dayview.png',
			'/gallery/spiredelta/transcoding.png',
			'/gallery/spiredelta/notes.png'
		],
		tags: ['golang', 'typescript', 'ffmpeg', 'react']
	},
	{
		title: 'Google',
		subtitle: 'Software Engineering Intern',
		period: '2017',
		url: undefined,
		description: [
			'As an intern at Google, I contributed to a major update to the AdWords platform. My work spanned the whole stack: frontend, backend, and unit testing'
		],
		logo: '/logos/google.svg',
		images: [],
		tags: ['java', 'rpc', 'angular', 'dart', 'bazel']
	},
	{
		title: 'Apple',
		subtitle: 'Software Engineering Intern',
		period: '2016',
		url: undefined,
		description: [
			'I spent an extended 8-month internship at Apple building internal web applications for the AppleCare teams.',
			'Among these projects, the largest two were a log aggregation system, which processed millions of logs, and an issue tracker which was used by multiple teams at the company.'
		],
		logo: '/logos/apple.svg',
		images: [],
		tags: ['php', 'mysql', 'javascript']
	}
];

export const Projects: IProject[] = [
	{
		title: 'CustomRealms',
		subtitle: 'Founder',
		period: '2020 – now',
		url: 'https://github.com/customrealms',
		description: [
			'CustomRealms is an open-source TypeScript framework for building Minecraft server plugins. It comes with a CLI to easily create and compile projects.'
		],
		logo: undefined,
		images: [
			'/gallery/customrealms/ide.png',
			'/gallery/customrealms/player.png',
			'/gallery/customrealms/store.png'
		],
		tags: ['java', 'typescript', 'golang']
	}
];
