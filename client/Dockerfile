FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "dev", "--host", "--port", "3000"]