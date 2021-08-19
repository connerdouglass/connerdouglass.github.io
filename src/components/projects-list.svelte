<script lang="ts">
    import type { IProject } from "./project";
    import Project from "./project.svelte";

    export let projects: IProject[];
</script>

{#each projects as project}
    <Project {...project}></Project>
{/each}
