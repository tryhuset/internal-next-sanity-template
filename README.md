# Internal Next Sanity Template

This template is the foundation for a Next.js app with a router and Sanity 3 live preview. Sanity is embedded under the path: `/studio`.

## Features

- Live previews using `next-sanity`
- Customized Sanity Desk Tool
- Just TypeScript
- Eslint configuration
- Environment variables

## User Manual

### Step 1. Vercel deployment

1. Deploy with Vercel:

   [![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]
3. Make sure you are logged in to Try Huset in the top left corner
4. Follow the required steps and add a temporary environment variable for `NEXT_PUBLIC_URL`
5. Replace the environment variable and redeploy in Vercel
### Step 2. Set up the project locally
1. [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) then run the following command from the project's root directory:

```bash
npx vercel link
```
2. Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

3. Run Next.js locally in development mode

```bash
pnpm install && pnpm run dev
```

## Customization Recommendation

To get started with customizing your Sanity Desk Tool, we recommend using the [Themer tool](https://themer.sanity.build/#/movies/desk).




[vercel-deploy]: https://vercel.com/new/clone?repository-url=https://github.com/tryhuset/internal-next-sanity-template.git&repository-name=internal-next-sanity-template&project-name=internal-next-sanity-template&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&env=NEXT_PUBLIC_URL
