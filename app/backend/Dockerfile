FROM node:18

WORKDIR .
COPY ./app/backend/package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]