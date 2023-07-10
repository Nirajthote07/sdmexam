FROM node
WORKDIR /src
COPY . .
EXPOSE 5000
CMD node index.js