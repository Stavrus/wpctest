FROM mhart/alpine-node:9.4.0

EXPOSE 3000 9242
WORKDIR /app/server

RUN apk --update add git && \
    rm -rf /var/cache/apk/*

COPY ./server/package.json /app/server/
RUN npm install
COPY ./web/package.json /app/web/
RUN cd ../web && npm install

CMD npm run start
