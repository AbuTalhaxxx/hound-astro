# Project Hound

Project Hound is a powerful and intuitive marketing automation tool designed to streamline your email campaigns, lead management, and customer engagement.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── firebase/
│   ├── icons/
│   └── pages/
└── package.json
```

- **`public/`**: Any static assets, like images, can be placed in the `public/` directory.
- **`src/components/`**: This is where we put any Astro/React/Vue/Svelte/Preact components.
- **`src/firebase/`**: This directory contains all the Firebase utility functions for interacting with the database.
- **`src/icons/`**: This directory is for any icons used in the application.
- **`src/pages/`**: Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Firebase Setup

This project uses Firebase for its backend. To get started, you'll need to create a Firebase project and set up Firestore and Authentication.

1.  **Create a Firebase project:** Go to the [Firebase console](https://console.firebase.google.com/) and create a new project.
2.  **Set up Firestore:** In the Firebase console, go to the "Firestore Database" section and create a new database.
3.  **Set up Authentication:** In the Firebase console, go to the "Authentication" section and enable the "Email/Password" sign-in method.
4.  **Get your Firebase config:** In the Firebase console, go to your project settings and get your Firebase config object.
5.  **Add your config to the project:** In `src/firebase/firebaseUtils.js`, replace the placeholder `firebaseConfig` object with your own.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
