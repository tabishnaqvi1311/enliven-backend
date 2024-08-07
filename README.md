#### Routes
- `POST /api/auth/login`
- `POST /api/auth/signup`
- `GET /api/user/:id/children`
- `POST /api/user/:id/child`
- `GET /api/user/:id`
- `POST /api/game/:id/update-score`

#### Local Setup
- enter `DATABASE_URL` (postgres) in `.env`
- run `npm install`
- run `nodemon index.ts`