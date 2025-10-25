# DTC GOAT Custom Theme

A minimal custom theme for the DTC GOAT Flarum forum, featuring Tailwind CSS and Alpine.js for modern, reactive UI components.

## Features

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Alpine.js**: Lightweight JavaScript framework for interactive components
- **Custom Branding**: DTC GOAT color scheme and styling
- **Responsive Design**: Mobile-first approach with modern design patterns

## Color Palette

- **Primary**: `#4f46e5` (Indigo)
- **Secondary**: `#06b6d4` (Cyan)
- **Accent**: `#8b5cf6` (Purple)
- **Dark**: `#1e293b` (Slate)
- **Light**: `#f8fafc` (Light slate)

## Installation

1. Navigate to the themes directory:
   ```bash
   cd themes/dtc-goat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the theme assets:
   ```bash
   npm run build
   ```

## Development

### Build Commands

- `npm run dev` - Build assets for development
- `npm run build` - Build and minify assets for production
- `npm run watch` - Watch for changes and rebuild automatically
- `npm run build:css` - Build only CSS
- `npm run build:js` - Build only JavaScript

### Watch Mode

For active development, use watch mode to automatically rebuild on file changes:

```bash
npm run watch
```

## Custom Components

### Alpine.js Components

The theme includes several Alpine.js components:

- **dtcHeader**: Responsive header with mobile menu toggle
- **dtcTheme**: Dark mode toggle with localStorage persistence
- **dtcNotifications**: Toast notification system

### Tailwind Utilities

Custom utility classes for DTC GOAT branding:

- `.dtc-header` - Branded header styling
- `.dtc-button` - Primary button style
- `.dtc-card` - Card component with hover effects
- `.dtc-badge` - Small badge/label component
- `.text-dtc-gradient` - Gradient text effect

## Integration with Flarum

To integrate this theme with Flarum, you'll need to:

1. Build the theme assets
2. Reference the compiled CSS and JS in your Flarum templates
3. Add the custom styles to your Flarum configuration

## File Structure

```
themes/dtc-goat/
├── src/
│   ├── styles.css      # Source Tailwind CSS
│   └── app.js          # Source JavaScript with Alpine.js
├── dist/
│   ├── styles.css      # Compiled CSS (generated)
│   └── app.js          # Compiled JavaScript (generated)
├── package.json        # Node dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── README.md          # This file
```

## License

MIT
