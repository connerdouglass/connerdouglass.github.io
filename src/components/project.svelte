<script lang="ts">
    
    export let title: string;
    export let images: string[];
    export let description: string[];
    export let tags: string[];
    
</script>

<div class="project">
    <div class="top">
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
            line-height: 200%;

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
                    &:nth-child(odd)
                    {
                        margin-right: 10px;
                    }

                    &:nth-child(even)
                    {
                        margin-left: 10px;
                    }
                }

                @media screen and (min-width: 800px) {
                    &:not(:last-child)
                    {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
