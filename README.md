# Shanuella's Portfolio

A personal portfolio website showcasing my projects from GitHub.

## Features

- About section with bio and profile image
- Projects section that dynamically fetches and displays GitHub repositories
- Contact form for getting in touch
- Responsive design for mobile and desktop
- Simple navigation

## Setup

1. Clone or download this repository.
2. Add your profile image as `images/profile.jpg`.
3. Open `index.html` in a web browser, or run a local server to enable JavaScript fetching.

## Running Locally

To run a local server (required for GitHub API calls):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub named `ndohdhanuella.github.io` (replace with your username if different).
2. Initialize Git in your local folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add the remote repository:
   ```bash
   git remote add origin https://github.com/ndohdhanuella/ndohdhanuella.github.io.git
   ```
4. Push to GitHub:
   ```bash
   git push -u origin main
   ```
5. Go to repository Settings > Pages, select "Deploy from a branch", choose `main` branch, and save.
6. Your site will be live at `https://ndohdhanuella.github.io`.

### Other Options

- **Netlify**: Drag and drop the folder to [netlify.com](https://netlify.com) for instant deployment.
- **Vercel**: Use their platform for static sites.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub API

## Customization

- Edit `index.html` for content changes
- Modify `style.css` for styling
- Update `script.js` for functionality (e.g., change username or add more features)