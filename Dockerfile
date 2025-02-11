FROM node:18 AS build

WORKDIR /app
COPY package*.json  package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM caddy:2

WORKDIR /srv
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]