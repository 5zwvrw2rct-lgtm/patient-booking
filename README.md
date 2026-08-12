# Patient Booking

This repository contains a simple frontend + backend setup for a patient booking app, designed to be deployed with:

- Backend (API + Prisma + PostgreSQL) on [Railway](https://railway.app)
- Frontend (Next.js) on [Vercel](https://vercel.com)

## Structure

- `backend/` – Next.js API routes + Prisma
- `frontend/` – Next.js app (App Router)

## Backend (Railway)

1. Create a new Railway project.
2. Provision a PostgreSQL database in the project.
3. Add a new service from this GitHub repo (backend folder).
4. In the backend service Variables, set:

   - `DATABASE_URL` = `${{Postgres.DATABASE_URL}}`
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = any random string

5. Railway will run `npm start`, which runs `prisma migrate deploy` and starts the app.

### Seed admin user

After deploy, call the seed endpoint once:

- `POST https://your-backend-service.railway.app/api/admin/seed`

This creates:

- Email: `admin@patient.com`
- Password: `admin123`

## Frontend (Vercel)

1. Import this repo as a new project in Vercel.
2. Set environment variable:

   - `NEXT_PUBLIC_API_URL` = `https://your-backend-service.railway.app`

3. Deploy.

Then open your Vercel URL and log in with the admin credentials above.
