FROM node:11.4.0 as builder

WORKDIR '/app'
COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY --from=builder /app/builder /usr/share/nginx/html

