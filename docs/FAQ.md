# Frequently Asked Questions

### How do I check my saved theme preference?

From the browser console:

```js
console.log(localStorage.getItem('theme'));
localStorage.setItem('theme', 'dark');
localStorage.removeItem('theme'); // reset to default
```

### Which browsers are supported?

Chrome/Edge 76+, Firefox 55+, Safari 12.1+, Opera 63+ - effectively all modern browsers.

### I see a flash of the wrong theme on page load. How do I fix that?

Add a small inline script to `<head>`, before your stylesheets, that reads `localStorage` and applies the `dark` class immediately. See Installation for the exact snippet.

### Can I add a custom theme (e.g. "sepia")?

Yes. Extend the allowed values in `themeManager.js`:

```js
applyTheme(theme) {
  if (!['light', 'dark', 'auto', 'sepia'].includes(theme)) {
    theme = this.DEFAULT_THEME;
  }
  // ...
}
```

Then add a matching button:

```html
<button class="theme-btn" data-theme="sepia">Sepia</button>
```

### Is it mobile-friendly?

Yes - the CSS includes responsive breakpoints for mobile, tablet, and desktop.

### How many files do I actually need?

Two: `themeManager.js` (required, handles the logic) and `themeToggle.css` (optional, handles styling). Without the stylesheet, theme switching still works via the `data-theme` attribute, but the buttons will have no visual styling.

### Is it accessible?

Yes - ARIA labels, keyboard navigation, visible focus states, and `prefers-reduced-motion` support are built in. See Customization for details.

### Can I extend `ThemeManager` with my own logic?

Yes:

```js
const originalApply = ThemeManager.applyTheme;
ThemeManager.applyTheme = function (theme) {
  originalApply.call(this, theme);
  console.log('Theme changed to', theme);
};
```
