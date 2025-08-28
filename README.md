# Personal Full-Stack Project

A full-stack personal portfolio project built with Nuxt 3. It features an integrated backend using the Nitro server engine and is designed for deployment with a database on NuxtHub.

## Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/)
- **Server:** [Nitro](https://nitro.unjs.io/)
- **Deployment & Database:** [NuxtHub](https://hub.nuxt.com/)
- **Language:** TypeScript
- **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

### 1. Install Dependencies

This project uses Bun as the package manager. From the root directory, run:

```bash
bun install
```

### 2. Run the Development Server

This will start the development server on `http://localhost:3000`:

```bash
bun dev
```

## Project Structure

- `app/`: Contains the Vue.js frontend application.
- `server/api/`: Contains the backend API routes powered by Nitro.
- `nuxt.config.ts`: The main configuration file for Nuxt.

## Deployment

This application is configured to be deployed on [NuxtHub](https://hub.nuxt.com/). Connect this repository to a NuxtHub project to deploy it automatically.
