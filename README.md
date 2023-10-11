# This is a practice project to setup Node + Express + React

Run `npm start` to start the react dev server.

Run `npm run node-server` to start the backend nodejs server. Restart it anytime you make backend changes.

Setup node api endpoints in `src/lib/api/`.

Update Express routes in `src/express-server.js`.

Modify the base html file in `src/assets/base.html`.

Add static public files in `src/assets/`.

Add react files in `src/frontend/`.

## Docker, Postgresql

### Setup
`docker pull postgres`

### Run
`docker run --name grim -e POSTGRES_PASSWORD=woof -d postgres`

### Interact
Run `psql` inside the running container.

`docker exec -it grim psql -U postgres`
