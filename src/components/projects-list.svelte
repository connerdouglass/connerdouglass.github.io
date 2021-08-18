<script lang="ts">
    import Project from "./project.svelte";

    interface IProject {
        title: string;
        description: string[];
        image: string;
        tags: string[];
    }

    const projects: IProject[] = [
        {
            title: 'Spire Delta',
            description: [
                'Spire Delta is a full suite of workflow tools for television post-production teams. It is currently in use 24/7 by several of the world\'s largest reality TV productions.',
                'Delta solves a major bottleneck for customers by leveraging our in-house video transcoding engine which, in the worst case, is 25x faster than the previous solution.',
            ],
            image: '',
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
            description: [
                'CustomRealms was a platform for building multiplayer Minecraft server plugins using TypeScript. It featured a fully web-based coding IDE, which helped thousands of young people learn to code.',
                'Additionally, CustomRealms featured a complete Minecraft server hosting platform, enabling our customers to start playing their custom plugins with their friends.',
            ],
            image: '',
            tags: [
                'java',
                'typescript',
                'angular',
            ],
        },
    ];
</script>

{#each projects as project}
    <Project {...project}></Project>
{/each}
