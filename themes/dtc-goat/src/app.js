// DTC GOAT Custom Theme - Alpine.js Integration
import Alpine from 'alpinejs';

// Initialize Alpine.js
window.Alpine = Alpine;

// DTC GOAT specific Alpine components
Alpine.data('dtcHeader', () => ({
  open: false,
  toggle() {
    this.open = !this.open;
  }
}));

Alpine.data('dtcTheme', () => ({
  darkMode: false,
  init() {
    this.darkMode = localStorage.getItem('dtc-theme') === 'dark';
  },
  toggle() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dtc-theme', this.darkMode ? 'dark' : 'light');
  }
}));

Alpine.data('dtcNotifications', () => ({
  notifications: [],
  add(message, type = 'info') {
    const id = Date.now();
    this.notifications.push({ id, message, type });
    setTimeout(() => {
      this.remove(id);
    }, 5000);
  },
  remove(id) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }
}));

// Start Alpine
Alpine.start();

console.log('DTC GOAT theme loaded successfully!');
