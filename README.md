# turbo-nextjs-template

## About

Building huge apps with Next.js can be a pain. This template is a starting point for building a Next.js app with a monorepo structure and a few other goodies.

It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ admin
  |   ├─ React 18
  |   ├─ TailwindCSS
  |   ├─ E2E Typesafe API Server & Client
  |   └─ next-auth
  └─ web
      ├─ React 18
      ├─ TailwindCSS
      └─ E2E Typesafe API Server & Client
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
 |   └─ authentication using next-auth
 ├─ eslint-config-custom
 |   └─ shared custom eslint config
 ├─ tailwind
 |   └─ base tailwind config file
 ├─ tsconfig
 |   └─ shared tsconfig files
 ├─ ui
 |   └─ shared ui library
 └─ db
     └─ typesafe db:calls using Prisma
```

## Features

- ❤️ Next.js 13
- ⭐️ blazingly fast with turborepo + turbopack
- 🧐 Typesafe API Server & Client
- 🔌 Authentication using next-auth
- ✅ Styling with TailwindCSS + class-variance-authority
- ⚡️ CI example for Github Actions

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# In packages/db/prisma update schema.prisma provider to use sqlite (only local)
# or use your own database provider
- provider = "postgresql"
+ provider = "sqlite"

# Create a `.env` for prisma and make sure it's synced
echo DATABASE_URL=file:./db.sqlite >> packages/db/.env

# used in development to get prisma model types generated
pnpm db:generate

# used in development for quick iterations on database schema
pnpm db:push

# lints all packages & apps
pnpm lint

# fixes dependencies with manypkg
pnpm fix

# format (according to prettier) all packages & apps
pnpm format

# clean (remove node_modules & .turbo) in all packages & apps
pnpm clean:workspaces

# clean (remove node_modules & .turbo) in root
pnpm clean
```

## Deployment

### Next.js

#### Prerequisites

_We do not recommend deploying a SQLite database on serverless environments since the data wouldn't be persisted. I tested with a quick Postgresql database on [Railway](https://railway.app) and a Planetscale-hosted MySQL database, but you can of course use any other database provider. Make sure the prisma schema is updated to use the correct database._

#### Deploy to Vercel

Let's deploy the Next.js application to [Vercel](https://vercel.com/). If you have ever deployed a Turborepo app there, the steps are quite straightforward. You can also read the [official Turborepo guide](https://vercel.com/docs/concepts/monorepos/turborepo) on deploying to Vercel.

1. Create a new project on Vercel, select the `apps/nextjs` folder as the root directory and apply the following build settings:
   <img width="907" alt="CleanShot 2022-09-03 at 22 51 25@2x" src="https://user-images.githubusercontent.com/51714798/188287309-e6ff4cb9-827a-4e50-83ed-e0953d7752f9.png">

2. Add your `DATABASE_URL` environment variable.

3. Done! Your app should successfully deploy. Assign your domain and use that instead of `localhost` for the `url` in the Expo app so that your Expo app can communicate with your backend when you are not in development.

## Contributing

Any help is appreciated, feel free to open an issue or a PR!

- [ ] Currently there is no testing strategy in place, but I'm open to suggestions.
- [ ] Storybook for UI library

## References

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).

It's an extended version of [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo), precisely the auth branch.
