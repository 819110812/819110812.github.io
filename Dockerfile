FROM node:16.3.0-alpine

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com/ && \
    npm i pnpm -g && \
    pnpm add vuepress@next vuepress-theme-hope@next @vuepress/plugin-search@next && pnpm i && pnpm up

EXPOSE 8080

ENTRYPOINT ["pnpm","docs:dev"]