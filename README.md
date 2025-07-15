# Docker + Postgres + Keycloak + Vue

## 📐 Architecture

```mermaid
graph LR
    client <--> vue
    client[Client]

    subgraph Docker
        direction TB

        postgres[Postgres]
        keycloak[Keycloak]
        vue[Vue]

        vue <--> keycloak
        keycloak <--> postgres
    end
```

## 🧪 Getting started

Build the docker stack:

```
docker compose up -d --build
docker compose down
```

Build the docker stack (development):

```
docker compose up -d postgres keycloak
npm i
npm run dev
```
