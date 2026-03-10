# Build
FROM node:20-alpine

WORKDIR /webapp

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile --silent

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
