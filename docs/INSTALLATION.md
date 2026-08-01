# Installation

## Requirements

- No build tools, no package manager, no dependencies.
- Works with plain HTML/CSS/JS, and alongside any framework (React, Vue, Angular, Svelte) or CSS library (Tailwind, Bootstrap).

## 1. Copy the files

Copy `themeManager.js` and `themeToggle.css` into your project, for example into a `themeSwitcher/` folder:

```bash
cp -r themeSwitcher your-project/
```

## 2. Add the stylesheet

```html
<link rel="stylesheet" href="themeSwitcher/themeToggle.css">
```

## 3. Add the toggle buttons

```html
<div class="theme-toggle-container">
  <button class="theme-btn" data-theme="light">light</button>
  <button class="theme-btn" data-theme="dark">dark</button>
  <button class="theme-btn" data-theme="auto">auto</button>
</div>
```

## 4. Add the script

```html
<script src="themeSwitcher/themeManager.js"></script>
```

## 5. Define your themes in CSS

```css
body { background: white; color: black; }
html.dark body { background: #111827; color: white; }
```

That's it - `ThemeManager` initializes itself once the script loads. No manual setup call is required.

## Avoiding a flash of the wrong theme

Because the theme is applied after the script loads, you may see a brief flash of the default theme on page load. To avoid this, inline a small script in `<head>`, before any stylesheets:

```html
<script>
  const theme = localStorage.getItem('theme') || 'auto';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = theme === 'dark' || (theme === 'auto' && prefersDark.matches);
  if (isDark) document.documentElement.classList.add('dark');
</script>
```

## Framework-specific notes

Theme Switcher has no dependencies and doesn't assume a specific framework. In React, Vue, Angular, or Svelte apps, load the script once (e.g. in `index.html`) and render the toggle markup as regular HTML - no bindings are required, since `ThemeManager` manages the DOM directly.

See Customization for styling with Tailwind or Bootstrap.
