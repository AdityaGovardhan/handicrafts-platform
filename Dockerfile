FROM node:12.0.0

WORKDIR /var/wwww/handicrafts-platform

RUN node --version
RUN npm --version

COPY package.json .
COPY package-lock.json .
RUN npm ci

EXPOSE 3000
# to be removed
EXPOSE 3001

COPY src src
COPY public public

CMD ["npm", "start", "--silent"]
