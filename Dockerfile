FROM  python:3.8.13-bullseye

WORKDIR /Core

RUN pip install django django-cors-headers

COPY . . 

EXPOSE 8000
FROM node:14.17.3

WORKDIR /react-website

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
