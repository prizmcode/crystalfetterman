# Crystal Fetterman (Nuxt)

The crystalfetterman.com portfolio site, built with Nuxt 4 and Tailwind CSS.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

Set `NUXT_PUBLIC_CONTACT_ENDPOINT` in `.env` to the URL the contact form posts to. It receives a JSON body with `name`, `email`, `message` and a hidden `company` field (a spam trap that should be empty).

## Where content lives

- **Portfolio:** `app/data/projects.ts`. Add an entry there and put its images in `public/images/work/`.
- **Resume:** `app/data/resume.ts` feeds the Resume page and the home page highlights. Keep it in step with the PDF resume.
- **Home, about and contact copy:** directly in `app/pages/`.

## Deploying

The site is static. `npm run generate` writes it to `.output/public/`. Set `NUXT_PUBLIC_CONTACT_ENDPOINT` in the host's build settings so the contact form works.

`.github/workflows/deploy.yml` can also upload the build to Hostinger over FTP. The comments at the top list the secrets and variables it needs. It runs only when started by hand until `DEPLOY_ON_PUSH` is `true`.
