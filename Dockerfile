FROM node:16-slim

LABEL maintainer="Luis Otávio Lourenço de Souza"

EXPOSE 8005

RUN apt-get update

ENV APP_ROOT=/app
WORKDIR ${APP_ROOT}
ARG NODE_ENV=production

COPY ./package*.json ${APP_ROOT}/
COPY ./prisma ${APP_ROOT}/
RUN npm install
COPY ./ ${APP_ROOT}/

RUN npm run build

CMD npm run start:prod