# Customization

## Button colors

Override the default colors in your own stylesheet, loaded after `themeToggle.css`:

```css
.theme-btn {
  color: rgb(75, 85, 99);
  background-color: transparent;
}

.dark .theme-btn {
  color: rgb(209, 213, 219);
}

.theme-btn:not(.active):hover {
  background-color: rgba(209, 213, 219, 0.18);
}
```

## Container

```css
.theme-toggle-container {
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(229, 231, 235, 0.3);
}

.dark .theme-toggle-container {
  background-color: rgba(55, 65, 81, 0.3);
}
```

## Responsive breakpoints

```css
/* Mobile (max-width: 480px) */
.theme-btn {
  padding: 0.25rem 0.375rem;
  font-size: 0.6rem;
}

/* Desktop (min-width: 1024px) */
.theme-btn {
  padding: 0.4rem 0.6rem;
  font-size: 0.7rem;
}
```

## Click animation

```css
@keyframes buttonPulse {
  0% { box-shadow: 0 0 0 0 rgba(107, 114, 128, 0.7); }
  70% { box-shadow: 0 0 0 6px rgba(107, 114, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(107, 114, 128, 0); }
}

.theme-btn.active:active {
  animation: buttonPulse 0.6s ease-out;
}
```

## Accessibility

The toggle buttons support ARIA labels, keyboard navigation, visible focus states, and `prefers-reduced-motion`.

```html
<button class="theme-btn" data-theme="light" aria-label="Light mode" aria-pressed="true">
  light
</button>
```

## Using with Tailwind or Bootstrap

Theme Switcher works alongside any CSS library. With Tailwind, pair `dark:` variants with the `html.dark` class Theme Switcher manages. With Bootstrap, combine `data-bs-theme` on your own elements with the toggle buttons - they operate independently, so both can coexist.
