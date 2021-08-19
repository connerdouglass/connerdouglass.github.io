<script lang="ts">
    
    export let title: string;
    export let url: string;
    export let description: string | undefined;
    export let tags: string[];
    
</script>

<a
    class="repo"
    href={url}
    target="_blank">
    <div class="title">{ title }</div>
    <div class="description">{ description ?? '' }</div>
    {#if tags.length > 0}
        <div class="tags">
            {#each tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>
    {/if}
</a>

<style lang="scss">
    @use "sass:math";

    $repo-height: 130px;

    .repo
    {
        position: relative;
        border-radius: 6px;
        background-color: rgba(var(--primary-font-color-rgb), 0.1);
        margin-bottom: 20px;
        overflow: hidden;
        padding: 16px;
        display: block;
        color: var(--primary-font-color);

        @media screen and (min-width: 1000px) {
            height: $repo-height;
        }

        > .title
        {
            font-family: 'Roboto Mono';
            font-size: 100%;
            font-weight: 600;
            margin-bottom: 6px;
        }

        > .description
        {
            color: rgba(var(--primary-font-color-rgb), 0.7);
            line-height: 140%;
            font-size: 90%;
            font-weight: 400;

            @media screen and (min-width: 1000px) {
                height: 40px;
                line-clamp: 2;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box !important;
                -webkit-box-orient: vertical;
            }
        }

        > .tags
        {
            line-height: 200%;

            > .tag
            {
                $tag-height: 24px;

                font-size: 80%;
                font-weight: 600;
                display: inline-block;
                padding: 0 $tag-height * 0.5;
                height: $tag-height;
                line-height: $tag-height;
                border-radius: math.div($tag-height, 2);
                background-color: var(--background-color);
                margin-right: 8px;
            }
        }
    }
</style>
