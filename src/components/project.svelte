<script lang="ts">
    
    export let title: string;
    export let image: string;
    export let description: string[];
    export let tags: string[];
    
</script>

<div class="project">
    <div class="title">{ title }</div>
    {#if description.length > 0}
        <div class="description">
            {#each description as para}
                <p>{para}</p>
            {/each}
        </div>
    {/if}
    {#if tags.length > 0}
        <div class="tags">
            {#each tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .project
    {
        position: relative;
        border-radius: 3px;
        background-color: rgba(var(--primary-font-color-rgb), 0.1);
        padding: 20px;
        margin-bottom: 20px;

        > .title
        {
            font-size: 110%;
            font-weight: 600;
            font-family: 'Roboto Mono';
            margin-bottom: 12px;
        }

        > .description
        {
            > p
            {
                color: rgba(var(--primary-font-color-rgb), 0.7);
                line-height: 160%;
                font-size: 95%;
            }
        }

        > .tags
        {
            margin-top: 20px;

            > .tag
            {
                $tag-height: 24px;

                font-size: 80%;
                font-weight: 600;
                display: inline-block;
                padding: 0 $tag-height * 0.5;
                height: $tag-height;
                line-height: $tag-height;
                border-radius: $tag-height / 2;
                background-color: var(--background-color);
                margin-right: 8px;
            }
        }
    }
</style>
