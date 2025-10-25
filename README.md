# DTC GOAT

**DTC GOAT** is a project collaboration hub built on Flarum, featuring a custom UI theme with Tailwind CSS and Alpine.js.

## Overview

This repository contains a Flarum forum installation configured as a collaboration platform for the DTC GOAT project. The forum includes a custom theme with modern design patterns and branding.

## Features

- **Flarum 2.0 Beta**: Modern, fast, and elegant forum software
- **Custom Theme**: Tailwind CSS + Alpine.js for a modern, reactive UI
- **DTC GOAT Branding**: Custom color scheme and styling
- **Responsive Design**: Mobile-first approach
- **Extensions**: Pre-configured with essential Flarum extensions

## Installation

### Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js 16+ and npm
- MySQL/MariaDB or PostgreSQL database
- Web server (Apache/Nginx)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/okrg/dtc-goat.git
   cd dtc-goat
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install and build the custom theme:
   ```bash
   cd themes/dtc-goat
   npm install
   npm run build
   cd ../..
   ```

4. Configure Flarum:
   - Copy `config.php.example` to `config.php` (if exists)
   - Set up your database connection
   - Configure your web server to point to the `public` directory

5. Visit your forum URL and complete the installation wizard

## Custom Theme

The custom theme is located in `themes/dtc-goat/` and includes:

- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework
- **Custom Components**: Reusable UI components
- **DTC GOAT Branding**: Custom color palette and styling

See [themes/dtc-goat/README.md](themes/dtc-goat/README.md) for detailed theme documentation.

## Development

### Theme Development

To work on the custom theme:

```bash
cd themes/dtc-goat
npm run watch
```

This will watch for changes and automatically rebuild the theme assets.

### Flarum Extensions

This installation includes the following extensions:

- Approval
- BBCode
- Emoji
- Flags
- GDPR
- Likes
- Lock
- Markdown
- Mentions
- Messages
- Nicknames
- Pusher
- Statistics
- Sticky
- Subscriptions
- Suspend
- Tags

## Project Structure

```
dtc-goat/
├── public/              # Web root
├── storage/             # Flarum storage
├── themes/              # Custom themes
│   └── dtc-goat/       # DTC GOAT custom theme
├── vendor/              # PHP dependencies
├── composer.json        # PHP dependencies configuration
├── extend.php          # Flarum extensions configuration
└── flarum              # Flarum CLI tool
```

## License

This project uses Flarum which is licensed under MIT. The custom theme is also MIT licensed.

## Support

For issues related to:
- **Flarum Core**: https://github.com/flarum/core/issues
- **DTC GOAT Project**: Open an issue in this repository