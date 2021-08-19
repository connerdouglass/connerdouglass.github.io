<script lang="ts">
    
    export let title: string;
    export let subtitle: string | undefined;
    export let images: string[];
    export let description: string[];
    export let tags: string[];
    
</script>

<div class="project">
    <div class="top">
        <div class="title">{ title }</div>
        {#if subtitle}
            <div class="subtitle">{ subtitle }</div>
        {/if}
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
    {#if images.length > 0}
        <div class="gallery">
            {#each images as image,i}
                <img
                    src={image}
                    alt={`${title} gallery image #${i+1}`} />
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    @use "sass:math";
    .project
    {
        position: relative;
        border-radius: 6px;
        background-color: rgba(var(--primary-font-color-rgb), 0.1);
        margin-bottom: 20px;
        overflow: hidden;

        > .top
        {
            padding: 20px;

            > .title
            {
                font-size: 110%;
                font-weight: 600;
                font-family: 'Roboto Mono';
                margin-bottom: 12px;
            }

            > .subtitle
            {
                font-size: 85%;
                font-weight: 500;
                // text-transform: uppercase;
                margin-top: -8px;
                margin-bottom: 12px;
                opacity: 0.8;
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

        > .gallery
        {
            padding: 20px;
            background-color: rgba(var(--background-color-rgb), 0.5);
            white-space: nowrap;
            overflow-x: auto;

            /* width */
            &::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            
            /* Handle */
            &::-webkit-scrollbar-thumb {
                background-color: rgba(var(--primary-font-color-rgb), 0.5);
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:active {
                background-color: rgba(var(--primary-font-color-rgb), 0.8);
            }

            @media screen and (max-width: 800px) {
                text-align: center;
            }

            img
            {
                border-radius: 6px;
                border: 3px solid rgba(var(--primary-font-color-rgb), 0.5);
                height: 120px;

                @media screen and (max-width: 800px) {
                    width: 40%;
                    height: auto;
                }

                &:not(:last-child)
                {
                    margin-right: 10px;
                }
            }
        }
    }
</style>
