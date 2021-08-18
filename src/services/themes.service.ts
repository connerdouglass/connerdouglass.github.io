export interface Theme {
    key: string;
    style: {[key: string]: string};
}

export class ThemesService {

    /**
     * The storage key for storing the user's theme preference
     */
    private static readonly STORAGE_KEY = 'theme';

    /**
     * Array of all registered theme listeners
     */
    private theme_listeners: ((theme: Theme) => void)[] = [];

    public constructor(
        private readonly default_theme: Theme,
        private readonly themes: Theme[],
    ) {}

    /**
     * Gets the theme preferred by the system
     * @returns the system theme or null
     */
    private get_system_theme(): Theme | null {

        // If it's dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return this.get_theme_by_key('dark');
        }

        // Otherwise, return light mode
        return this.get_theme_by_key('light');

    }

    /**
     * Gets the theme selected in local storage
     * @returns the theme or null
     */
    private get_stored_theme(): Theme | null {

        // Check the stored theme
        const value = localStorage.getItem(ThemesService.STORAGE_KEY);

        // Return the corresponding theme
        return (value === null) ? null : this.get_theme_by_key(value);

    }

    /**
     * Gets the overall theme to use for the page given both system preferences
     * and user selection.
     * @returns the overall theme
     */
    private get_theme(): Theme {

        // Check the themes, in order
        return this.get_stored_theme() ?? this.get_system_theme() ?? this.default_theme;

    }

    /**
     * Sets the theme to use for the page
     * @param theme_key the theme key to set
     */
    public set_theme(theme_key: string): void {

        // Update the theme key
        localStorage.setItem(ThemesService.STORAGE_KEY, theme_key);

        // Get the newly selected theme
        const theme = this.get_theme();

        // Call all of the theme handlers
        this.theme_listeners.forEach(h => h(theme));

    }

    /**
     * Adds a listener function that is triggered whenever the theme changes
     * @param listener the listener for the themes
     */
    public add_listener(listener: (theme: Theme) => void): void {
        this.theme_listeners.push(listener);
        listener(this.get_theme());
    }

    /**
     * Removes a theme listener function
     * @param listener the listener to remove
     */
    public remove_listener(listener: (theme: Theme) => void): void {
        this.theme_listeners = this.theme_listeners.filter(x => x !== listener);
    }

    /**
     * Cycles through the themes
     */
    public cycle(): void {
        const theme = this.get_theme();
        const index = this.themes.indexOf(theme);
        this.set_theme(this.themes[(index + 1) % this.themes.length].key);
    }

    /**
     * Gets the theme with the provided key, if it exists
     * @param key the key to look for
     * @returns the theme, or null if not found
     */
    private get_theme_by_key(key: string): Theme | null {
        return this.themes.find(t => t.key === key) ?? null;
    }

    /**
     * Mounts the theme service to an element (usually the body of the page) to automatically update
     * the theme class as the theme changes
     * @param body the body element to mount to
     */
    public mount(body: HTMLElement): void {

        // Subscribe to all the themes
        this.add_listener(selected_theme => {

            // Loop through all the themes
            for (let theme of this.themes) {

                // If the theme is selected
                if (theme == selected_theme) { 

                    // Add the class name
                    body.classList.add(`theme-${theme.key}`);

                    // Add the variables to the CSS
                    for (let key of Object.keys(theme.style)) {
                        document.documentElement.style.setProperty(key, theme.style[key]);
                    }

                } else {
                    body.classList.remove(`theme-${theme.key}`);
                }

            }

        });

    }

}
