Hello!

The site is available for live viewing at the link https://fenn1ks.github.io/voicenterTest/

To start working with the project, do the following:

- To launch Nuxt application Nodejs version should be 18.18.2 or newer. Please, consider it and install nodejs on your device.

1. Clone the repository to yourself
   -To do this, you need to go to the desired directory
   where you want to clone the project, and write the
   cloning command in the console

```bash
git clone https://github.com/fenn1ks/voicenterTest
```

2. Install all project dependencies(depending on what package manager you use):

## Setup

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
# bun
bun install
```

3. Starting a server for development(depending on what package manager you use):

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
# pnpm
pnpm run dev
# yarn
yarn dev
# bun
bun run dev
```

4. Build the application for production(depending on what package manager you use):

```bash
# npm
npm run build
# pnpm
pnpm run build
# yarn
yarn build
# bun
bun run build
```

4. Locally preview production build(depending on what package manager you use):

```bash
# npm
npm run preview
# pnpm
pnpm run preview
# yarn
yarn preview
# bun
bun run preview
```

5. Here is how to deploy a Nuxt 3 project on GitHub Pages:

-Install dev dependency gh-pages

-Add the script "deploy": "gh-pages -d dist" in package.json file

-Specifiy app baseURL in nuxt.config.ts

-Specifiy buildAssetsDir in nuxt.config.ts that doesn't start with an underscore \_. See the router config example below

-Create an empty file .nojekyll at the root of the project

-Generate with npm run generate

-Deploy with npm run deploy
