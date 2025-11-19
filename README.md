# Simone Pedrazzi's Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b3a363a6-0a1b-4cee-b07f-3193440e7ff0/deploy-status)](https://app.netlify.com/projects/vocal-zabaione-58bfbe/deploys)

This is a personal portfolio website for Simone Pedrazzi, a Senior Engineer. It's a single-page site built with Hugo and the `hugo-scroll` theme, showcasing skills in Python, Cloud, and Distributed Architecture.

## Getting Started

### Prerequisites

Ensure you have [Hugo](https://gohugo.io/getting-started/installing/) installed.

### Local Development

To run the website locally:

```bash
hugo server
```

Access it at `http://localhost:1313/`. Changes will hot-reload.

### Building for Deployment

To generate static files for deployment:

```bash
hugo
```

This creates files in the `public` directory.

## Project Structure

*   **Content:** Markdown files in `content/en/`. Homepage sections are in `content/en/homepage/`.
*   **Configuration:** `hugo.toml` for site-wide settings.
*   **Layouts:** Customizations to the theme, e.g., `layouts/_default/index.html`.
*   **Assets:** Images in `assets/images` and `static/images`.
