<div align="center">
<img alt="Portfolio" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%">
</div>

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)

Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js, React, TypeScript, Shadcn/UI, TailwindCSS
- Includes a **CMS-style dashboard** (`/dashboard`) to manage the site content (profile, skills, work, education, projects, social links) — powered by a free Postgres database (Neon) and image uploads to Neon Object Storage
- Responsive for different devices
- Optimized for Next.js and Vercel

# Dashboard & CMS

The site content lives in a database so it can be edited without touching code:

- **`/login`** — authenticate with a single configured account
- **`/dashboard`** — overview
- **`/dashboard/profile`** — hero, about, email, avatar
- **`/dashboard/projects`**, **`/dashboard/work`**, **`/dashboard/education`**, **`/dashboard/skills`**, **`/dashboard/social`** — full CRUD + image upload

Changes are applied immediately (`revalidatePath`). If the database is not configured
or unreachable, the public site automatically falls back to the static data in
[`src/data/resume.tsx`](./src/data/resume.tsx) so it never breaks.

## Architecture

| Layer        | Tool                                          | Free tier? |
| ------------ | --------------------------------------------- | ---------- |
| Database     | Neon Postgres + Drizzle ORM (`node-postgres`) | ✅ 0.5 GB / 100 CU-h |
| File storage | Neon Object Storage (S3-compatible)           | ✅ included |
| Hosting      | Vercel (Hobby)                                | ✅          |
| Auth         | Signed JWT cookie (`jose`) + `proxy.ts`       | —          |

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/mohimamrifai/imamrifaidev-my-id
   cd imamrifaidev-my-id
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up Neon (Postgres + Object Storage) with the CLI. This links the
   project, provisions the `assets` bucket declared in `neon.ts`, and pulls the
   `DATABASE_URL`, `AWS_*` variables into `.env.local`:

   ```bash
   npm i -g neon@latest
   neon init -y --org-id <org-id> --project-id <project-id> --branch production --services postgres,object-storage
   neon deploy
   ```

   (Or set `DATABASE_URL` / `AWS_*` manually — see `.env.example`. Without a
   database the site runs on static data.)

4. Set up the database schema and seed it with the current resume content:

   ```bash
   pnpm db:migrate   # or: pnpm db:push
   pnpm db:seed
   ```

5. Start the local server:

   ```bash
   pnpm dev
   ```

6. Open http://localhost:3000 and log in with the account configured via
   `ADMIN_EMAIL` / `ADMIN_PASSWORD` (defaults live in `src/lib/session.ts`).
   Image uploads go to the Neon Object Storage `assets` bucket.

# Environment variables

| Variable              | Required | Description                                                            |
| --------------------- | -------- | ---------------------------------------------------------------------- |
| `DATABASE_URL`        | optional | Neon Postgres pooled connection string. Without it, static data is used. |
| `DATABASE_URL_UNPOOLED` | optional | Direct connection used for migrations.                                |
| `AWS_ACCESS_KEY_ID`   | optional | Neon Object Storage credential (injected by `neon deploy`).            |
| `AWS_SECRET_ACCESS_KEY` | optional | Neon Object Storage credential (injected by `neon deploy`).          |
| `AWS_ENDPOINT_URL_S3` | optional | Neon Object Storage branch endpoint (injected by `neon deploy`).        |
| `AWS_REGION`          | optional | Object storage region (injected by `neon deploy`).                     |
| `ADMIN_EMAIL`         | optional | Dashboard e-mail (default `imamrifaibisnis@gmail.com`).                |
| `ADMIN_PASSWORD`      | optional | Dashboard password (default `Webkumaspalul123@`).                      |
| `AUTH_SECRET`         | required in prod | Secret that signs the session cookie. `openssl rand -base64 32` |

> ⚠️ Because the default credentials are baked into the source, anyone who can
> read the repo knows them. Set `ADMIN_EMAIL`/`ADMIN_PASSWORD` in Vercel (or keep
> the repo private) after deploying.

# Deploying to Vercel

1. Push the repo and import it in Vercel (Hobby plan is free).
2. Create a **Neon** project with Object Storage, then run `neon deploy` locally
   once to provision the bucket and pull the env vars. Copy `DATABASE_URL`,
   `DATABASE_URL_UNPOOLED`, and the `AWS_*` values into the Vercel project
   environment variables (use the production branch).
3. Add `AUTH_SECRET`, and optionally `ADMIN_EMAIL` / `ADMIN_PASSWORD`.
4. Run `pnpm db:migrate && pnpm db:seed` once against the production database
   (from your machine, with the production `DATABASE_URL` in `.env.local`).
5. Deploy. The public site revalidates automatically after dashboard edits.

# Scripts

```bash
pnpm dev          # local dev server
pnpm build        # production build
pnpm db:push      # create/update tables from the schema
pnpm db:generate  # generate a migration file into ./drizzle
pnpm db:migrate   # apply migrations
pnpm db:seed      # fill the database with the current resume content
pnpm db:studio    # browse the database in Drizzle Studio
```

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).