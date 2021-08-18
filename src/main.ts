import App from './App.svelte';
import { ThemesService } from './services/themes.service';
import { DarkTheme } from './services/themes/dark.theme';
import { LightTheme } from './services/themes/light.theme';

// Create the services
const themes_service = new ThemesService(LightTheme, [
	LightTheme,
	DarkTheme,
]);

// Bind services to the context
const context = new Map<any, any>();
context.set('themes_service', themes_service);

// Bind the theme service to the document body
themes_service.mount(document.body);

// Create the root app component
const app = new App({
	target: document.body,
	props: {},
	context,
});

export default app;
