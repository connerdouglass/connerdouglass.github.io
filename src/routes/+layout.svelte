<script>
	// import Header from './Header.svelte';
	import '../app.css';

	import { setContext, onMount } from 'svelte';
	import { ThemesService } from '../services/themes.service';
	import { DarkTheme } from '../services/themes/dark.theme';
	import { LightTheme } from '../services/themes/light.theme';

	// Create the services
	const themes_service = new ThemesService(LightTheme, [
		LightTheme,
		DarkTheme,
	]);

	// Bind services to the context
	setContext('themes_service', themes_service);

	// Bind the theme service to the document body
	themes_service.mount(document.body);
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
</style>