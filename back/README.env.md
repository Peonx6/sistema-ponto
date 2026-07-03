Usage

1. Copy `.env.example` to `.env` inside the `back/` folder:

```bash
cd back
cp .env.example .env
```

2. Edit `back/.env` and fill the values (do NOT commit `.env`):

- `MONGO_USER` — your MongoDB username
- `MONGO_PASSWORD` — your MongoDB password
- `MONGO_URI` — full connection string (you can use the template in `.env.example`)
- `PORT` — backend port (default 8000)

3. Start the backend from the repository root:

```bash
npm run start
```

Notes

- Keep secrets out of source control. Share only `.env.example` with the team.
- Each dev copies the example and fills their local `.env` with their own credentials.
