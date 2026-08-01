# Theme Switcher

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Yerli Uretim](https://img.shields.io/badge/%F0%9F%A4%9D-YERL%C4%B0%20%C3%9CRET%C4%B0M-red)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-%E2%9D%A4-red)](https://github.com/sponsors/erayendes) [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-FFDD00)](https://buymeacoffee.com/erayendes)

A lightweight, portable theme mode component (`light`, `dark`, `auto`) for any web project. Add it in three lines, ready for production.

## Features

- Three theme modes - `light`, `dark`, and `auto` (follows the OS setting)
- Persistent - remembers the user's choice in `localStorage`
- Live system sync - `auto` mode updates in real time when the OS theme changes
- Zero dependencies - no frameworks, no build step, ~10 KB total (~5 KB minified)
- Framework-agnostic - works with vanilla JS, React, Vue, Angular, Svelte, and any CSS library (Tailwind, Bootstrap, plain CSS)
- Accessible - ARIA labels, keyboard navigation, visible focus states, `prefers-reduced-motion` support
- Responsive - mobile, tablet, and desktop breakpoints included

## Quick start

```html
<link rel="stylesheet" href="themeSwitcher/themeToggle.css">

<div class="theme-toggle-container">
<button class="theme-btn" data-theme="light">light</button>
<button class="theme-btn" data-theme="dark">dark</button>
<button class="theme-btn" data-theme="auto">auto</button>
</div>

<script src="themeSwitcher/themeManager.js"></script>
```

```css
body { background: white; color: black; }
html.dark body { background: #111827; color: white; }
```
That's it - `ThemeManager` initializes itself automatically.

## Project structure

```
themeSwitcher/
|- themeManager.js # Theme management logic (required)
|- themeToggle.css # Button styles (optional)
|- demo.html # Minimal working demo
'- README.md
```

## Documentation

Full guides live in docs/:

- [Installation](docs/INSTALLATION.md)
- [API Reference](docs/API.md)
- [Customization](docs/CUSTOMIZATION.md)
- [FAQ](docs/FAQ.md)
- [Changelog](docs/CHANGELOG.md)

## Support

Need help or found a bug? Check the [Support guide](.github/SUPPORT.md) or open an issue.

If this project is useful to you, consider supporting its development through [GitHub Sponsors](https://github.com/sponsors/erayendes) or [Buy Me a Coffee](https://buymeacoffee.com/erayendes).

## Contributing

Bug reports and pull requests are welcome - see .github/CONTRIBUTING.md. This project follows a Code of Conduct.

## Citation

If you use this project in your work, please cite it using the metadata in [CITATION.cff](CITATION.cff).

## License

MIT
