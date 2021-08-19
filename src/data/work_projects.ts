import type { IProject } from "../components/project";

export const WorkProjects: IProject[] = [
    {
        title: 'Spire Delta',
        subtitle: 'Founder, CTO',
        period: '08/2019 –',
        url: 'https://spiretechnology.com',
        description: [
            'Spire Delta is a full suite of workflow tools for television post-production teams. It is currently in use 24/7 by several of the world\'s largest reality TV productions.',
            'Delta solves a major bottleneck for customers by leveraging our in-house video transcoding engine which, in the worst case, is 25x faster than the previous solution.',
        ],
        images: [
            '/gallery/spiredelta/library.png',
            '/gallery/spiredelta/dayview.png',
            '/gallery/spiredelta/transcoding.png',
            '/gallery/spiredelta/notes.png',
        ],
        tags: [
            'golang',
            'typescript',
            'c',
            'ffmpeg',
            'angular',
        ],
    },
    {
        title: 'CustomRealms',
        subtitle: 'Founder',
        period: undefined,
        url: 'https://github.com/customrealms',
        description: [
            'CustomRealms was a platform for building multiplayer Minecraft server plugins using TypeScript. It featured a fully web-based coding IDE, which helped thousands of young people learn to code.',
            'The CustomRealms platform is currently in the process of being open sourced.',
        ],
        images: [
            '/gallery/customrealms/ide.png',
            '/gallery/customrealms/player.png',
            '/gallery/customrealms/store.png',
        ],
        tags: [
            'java',
            'typescript',
            'angular',
        ],
    },
    {
        title: 'Google',
        subtitle: 'Software Engineering Intern',
        period: '2017',
        url: undefined,
        description: [
            'CustomRealms was a platform for building multiplayer Minecraft server plugins using TypeScript. It featured a fully web-based coding IDE, which helped thousands of young people learn to code.',
            'The CustomRealms platform is currently in the process of being open sourced.',
        ],
        images: [],
        tags: [
            'java',
            'rpc',
            'angular',
            'dart',
            'bazel',
        ],
    },
    {
        title: 'Apple',
        subtitle: 'Software Engineering Intern',
        period: '2016',
        url: undefined,
        description: [
            'CustomRealms was a platform for building multiplayer Minecraft server plugins using TypeScript. It featured a fully web-based coding IDE, which helped thousands of young people learn to code.',
            'The CustomRealms platform is currently in the process of being open sourced.',
        ],
        images: [],
        tags: [
            'php',
            'mysql',
            'javascript',
        ],
    },
];
