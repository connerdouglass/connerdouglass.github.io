<script lang="ts">
    import type { IRepo } from "./repo";
    import Repo from "./repo.svelte";

    export let repos: IRepo[];
</script>

<div class="repos-list">
    {#each repos as repo}
        <div class="repo">
            <Repo {...repo}></Repo>
        </div>
    {/each}
</div>

<style lang="scss">
    .repos-list
    {
        display: flex;
        flex-wrap: wrap;

        > .repo
        {
            flex-grow: 0;
            flex-shrink: 0;

            @media screen and (min-width: 1000px) {
                width: 50%;

                &:nth-child(odd)
                {
                    padding-right: 10px;
                }

                &:nth-child(even)
                {
                    padding-left: 10px;
                }
            }

            @media screen and (max-width: 1000px) {
                width: 100%;
            }
        }
    }
</style>