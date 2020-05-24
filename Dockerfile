FROM node:12.0.0

WORKDIR /var/wwww/handicrafts-platform

RUN node --version
RUN npm --version

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY src src

EXPOSE 3000

CMD ["npm", "start", "--silent"]
