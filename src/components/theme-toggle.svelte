<script lang="ts">

	import { getContext, onDestroy } from 'svelte';
	import IconButton from '@smui/icon-button';
	import type { Theme, ThemesService } from '../services/themes.service';

	// Mount the theme service to the document body
	const themes_service = getContext<ThemesService>('themes_service');

    // Track the theme as it changes
    let theme: Theme;
    const theme_handler = (t: Theme) => theme = t;
    themes_service.add_listener(theme_handler);
    onDestroy(() => {
        themes_service.remove_listener(theme_handler);
    });

    // Map of theme keys to icon keys
    const theme_icons: {[key: string]: string} = {
        'light': 'dark_mode',
        'dark': 'light_mode',
    };

    // The key for the icon to display
    $: icon = theme_icons[theme.key];

</script>

<IconButton
    class="material-icons"
    on:click={() => themes_service.cycle()}>{ icon }</IconButton>
