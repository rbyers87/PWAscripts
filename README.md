# PWA Website Wrapper

A Progressive Web App (PWA) wrapper that can be used to wrap any website with offline capabilities, add-to-home-screen functionality, and custom UserScript support.

## Features

- Service Worker for offline caching
- Add to Home Screen functionality
- Offline fallback page
- UserScript support
- Responsive design
- GitHub Pages compatible

## Setup and Deployment

1. Fork this repository or download the files.

2. Modify the website URL:
   - Open `index.html`
   - Find the iframe element with id="mainFrame"
   - Change the `src` attribute to your website's URL

3. Customize the PWA:
   - Update `manifest.json` with your app's name and colors
   - Replace the icons in the `icons` folder with your own (maintain the same sizes: 192x192 and 512x512)

4. Add UserScripts (optional):
   - Open `userscripts.js`
   - Add your scripts following the example format:
   ```javascript
   {
       name: 'My Script',
       match: ['*://website.com/*'],
       description: 'What my script does',
       enabled: true,
       code: function() {
           // Your JavaScript code here
       }
   }
   ```

5. Deploy to GitHub Pages:
   a. Go to your repository on GitHub
   b. Go to Settings > Pages
   c. Under "Source", select "main" branch
   d. Select "/ (root)" or "/docs" as the folder
   e. Click "Save"
   f. Your site will be published at `https://[username].github.io/[repository-name]`

## UserScript Configuration

The UserScript system allows you to inject custom JavaScript into the wrapped website. Each script should have the following properties:

- `name`: The name of your script
- `match`: Array of URL patterns where the script should run (supports wildcards)
- `description`: What the script does
- `enabled`: Boolean to enable/disable the script
- `code`: Function containing your script's code

### Adding Multiple UserScripts

You can add multiple UserScripts that work together. Here's how to manage them:

1. Open `userscripts.js`
2. Add new scripts to the `userScripts` array:
```javascript
const userScripts = [
    {
        name: 'Dark Mode',
        match: ['*://example.com/*'],
        description: 'Adds dark mode to the website',
        enabled: true,
        code: function() {
            // Dark mode code
        }
    },
    {
        name: 'Reading Mode',
        match: ['*://example.com/*'],
        description: 'Adds reading mode',
        enabled: true,
        code: function() {
            // Reading mode code
        }
    }
    // Add more scripts here
];
```

### URL Pattern Matching

The `match` property supports various URL patterns:

- `*://example.com/*` - Matches all pages on example.com
- `*://*.example.com/*` - Matches all subdomains
- `https://example.com/page/*` - Matches specific paths
- Multiple patterns: `['*://site1.com/*', '*://site2.com/*']`

### Script Communication

Scripts can communicate with each other using custom events:

```javascript
// In Script 1
document.dispatchEvent(new CustomEvent('darkModeChanged', { 
    detail: { enabled: true }
}));

// In Script 2
document.addEventListener('darkModeChanged', (e) => {
    console.log('Dark mode:', e.detail.enabled);
});
```

### Storing Script Data

Use localStorage to persist script settings:

```javascript
// Save data
localStorage.setItem('scriptName_setting', value);

// Load data
const setting = localStorage.getItem('scriptName_setting');
```

### Example Scripts

1. **Dark Mode Toggle**
```javascript
{
    name: 'Dark Mode',
    match: ['*://example.com/*'],
    description: 'Adds dark mode toggle',
    enabled: true,
    code: function() {
        const button = document.createElement('button');
        button.innerHTML = '🌙';
        button.onclick = () => document.body.classList.toggle('dark');
        document.body.appendChild(button);
    }
}
```

2. **Reading Mode**
```javascript
{
    name: 'Reading Mode',
    match: ['*://example.com/*'],
    description: 'Adds reading mode',
    enabled: true,
    code: function() {
        const button = document.createElement('button');
        button.innerHTML = '📖';
        button.onclick = () => document.body.classList.toggle('reading-mode');
        document.body.appendChild(button);
    }
}
```

### Best Practices

1. **Script Organization**
   - Keep scripts modular and focused
   - Use descriptive names and comments
   - Group related functionality

2. **Performance**
   - Avoid heavy processing in loops
   - Use event delegation for multiple elements
   - Cache DOM selections

3. **Compatibility**
   - Check for feature availability
   - Provide fallbacks for older browsers
   - Test on different devices

4. **Maintenance**
   - Version your scripts
   - Document changes
   - Test thoroughly before enabling

### Troubleshooting

1. **Scripts Not Loading**
   - Check the console for errors
   - Verify URL patterns match
   - Ensure script is enabled

2. **Conflicts with Website**
   - Use unique class names
   - Namespace your functions
   - Check for existing elements

3. **Storage Issues**
   - Clear localStorage if needed
   - Check for quota limits
   - Use try-catch for storage operations

## Local Development

1. Install a local server (e.g., using Python):
   ```bash
   python -m http.server 8000
   ```
   or using Node.js:
   ```bash
   npx serve
   ```

2. Open `http://localhost:8000` in your browser

## Testing PWA Features

1. Open Chrome DevTools (F12)
2. Go to Application > Service Workers to verify the service worker is registered
3. Test offline functionality by:
   - Going to Network tab in DevTools
   - Checking "Offline"
   - Refreshing the page

## Customization

- Update the theme colors in `manifest.json` and `index.html`
- Modify the offline page design in `offline.html`
- Update the styles in `styles.css`
- Customize the caching strategy in `sw.js`
- Add your UserScripts in `userscripts.js`

## Requirements

- HTTPS is required for PWA features to work
- GitHub Pages automatically provides HTTPS
- Some websites may block iframe embedding (X-Frame-Options)

## License

MIT License - feel free to use this for your own projects!