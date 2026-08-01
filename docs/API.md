# API Reference

`ThemeManager` is a small global object exposed once `themeManager.js` loads. Most projects only need the default setup from Installation - the methods below are for advanced or programmatic use.

## Methods

### `ThemeManager.init()`

Initializes the theme manager: loads the saved theme, attaches button listeners, and starts watching for system theme changes. Called automatically on script load - you shouldn't normally need to call this yourself.

### `ThemeManager.applyTheme(theme)`

Applies a theme and persists it to `localStorage`.

```js
ThemeManager.applyTheme('light');
ThemeManager.applyTheme('dark');
ThemeManager.applyTheme('auto'); // follow the OS setting
```

### `ThemeManager.loadTheme()`

Loads the previously saved theme from `localStorage` and applies it.

### `ThemeManager.getCurrentTheme()`

Returns the currently selected theme setting.

```js
ThemeManager.getCurrentTheme(); // 'light' | 'dark' | 'auto'
```

### `ThemeManager.isDarkMode()`

Returns whether dark mode is currently active (accounting for `auto` mode resolving against the OS preference).

```js
if (ThemeManager.isDarkMode()) {
  console.log('dark mode is active');
}
```

### `ThemeManager.shouldBeDark(theme)`

Returns whether a given theme setting should resolve to dark mode.

```js
ThemeManager.shouldBeDark('light'); // false
ThemeManager.shouldBeDark('dark');  // true
ThemeManager.shouldBeDark('auto');  // depends on the OS preference
```

### `ThemeManager.attachButtonListeners()`

Attaches click listeners to all elements matching `.theme-btn`. Called automatically during `init()`.

### `ThemeManager.updateButtonStates(activeTheme)`

Updates the active/inactive visual state of the toggle buttons.

```js
ThemeManager.updateButtonStates('dark');
```

### `ThemeManager.watchSystemThemeChanges()`

Starts listening for OS-level theme changes, so `auto` mode stays in sync in real time.

## Configuration properties

| Property | Default | Description |
|---|---|---|
| `STORAGE_KEY` | `'theme'` | The `localStorage` key used to persist the theme. |
| `DEFAULT_THEME` | `'auto'` | The theme used when nothing is saved yet. |
| `BUTTON_SELECTOR` | `'.theme-btn'` | CSS selector used to find toggle buttons. |
| `ACTIVE_CLASSES` | n/a | Classes applied to the active button. |
| `HOVER_CLASSES` | n/a | Classes applied on hover. |
| `ROOT_DARK_CLASS` | `'dark'` | Class added to `<html>` when dark mode is active. |

## Inspecting state manually

```js
// Read the saved theme
console.log(localStorage.getItem('theme'));

// Change it directly
localStorage.setItem('theme', 'dark');

// Reset to the default
localStorage.removeItem('theme');
```
