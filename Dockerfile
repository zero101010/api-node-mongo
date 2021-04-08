FROM node:12-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

# ------------------------------------------
# start server
# ------------------------------------------
ENTRYPOINT [ "npm", "start" ]
