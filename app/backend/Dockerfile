FROM node:18

WORKDIR ./app/backend
COPY ./app/backend/package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]