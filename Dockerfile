FROM node:16.3.0-alpine

WORKDIR /app

COPY . .

RUN npm i pnpm -g && \
    pnpm add vuepress@2.0.0-beta.49 vuepress-theme-hope@2.0.0-beta.91 @vuepress/plugin-google-analytics@2.0.0-beta.49 @vuepress/plugin-search@2.0.0-beta.49 @vuepress/plugin-docsearch@2.0.0-beta.49 && \
    pnpm add vuepress-plugin-copy-code2@next && \
    pnpm add vuepress-plugin-photo-swipe@next && \
    pnpm docs:build

EXPOSE 8080

ENTRYPOINT ["pnpm","docs:dev"]