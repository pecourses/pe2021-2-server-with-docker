FROM node:18.7-alpine3.16

RUN mkdir server

WORKDIR /server

COPY . .

RUN npm i 

EXPOSE 5001

CMD npm run dev