# Amanah Technologies — React Website

A 4-page company website built with **React 18**, **Vite**, and **React Router**.

Pages: Home (`/`), About (`/about`), Career (`/career`), Contact (`/contact`), plus a 404 page.

## Run it

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
react-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # entry point, sets up the router
    ├── App.jsx             # routes
    ├── index.css           # all styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── Banner.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Career.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Contact form

The form currently only shows a success message. To actually receive messages,
replace the `TODO` in `src/pages/Contact.jsx` with a call to your backend or a
form service such as Formspree or EmailJS.

## Deploy to Firebase Hosting

`firebase.json` is already set up: it serves `dist/` and sends every route to
`index.html`, so `/about`, `/career` etc. work on refresh.

One-time setup:

```bash
npm install -g firebase-tools
firebase login
firebase use --add        # pick your Firebase project, give it the alias "default"
```

Deploy (builds, then uploads):

```bash
npm run deploy
```

Your site goes live at `https://<your-project-id>.web.app`.
"# mywebsite" 
