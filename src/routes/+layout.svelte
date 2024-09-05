<script lang="ts">
	import '../app.css';

	import { setContext } from 'svelte';
	import { ThemesService } from '../services/themes.service';
	import { DarkTheme } from '../services/themes/dark.theme';
	import { LightTheme } from '../services/themes/light.theme';
	import ProfileBox from '../components/profile-box.svelte';

	// Create and bind the theme service
	const themes_service = new ThemesService([LightTheme, DarkTheme]);
	themes_service.mount(document.body);
	setContext('themes_service', themes_service);
</script>

<div class="app">
	<div class="left">
		<ProfileBox />
	</div>
	<div class="right">
		<slot />
		<div class="copyright">
			&copy; {new Date().getFullYear()} Conner Douglass
		</div>
	</div>
</div>

<style lang="scss">
	.app {
		max-width: 1000px;
		padding: 20px;
		margin: 0 auto;

		> .right {
			> .copyright {
				border-top: 2px solid rgba(var(--primary-font-color-rgb), 0.2);
				padding: 20px 0;
				text-align: center;
				font-size: 80%;
				color: rgba(var(--primary-font-color-rgb), 0.7);
			}
		}

		@media screen and (min-width: 800px) {
			display: flex;

			> .left {
				flex-grow: 0;
				flex-shrink: 0;
				width: 260px;
			}

			> .right {
				flex-grow: 1;
				flex-shrink: 1;
				padding-left: 20px;
				min-width: 0;
			}
		}
	}
</style>
