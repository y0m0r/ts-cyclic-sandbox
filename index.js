import * as http from "http";
const server = http.createServer(
  (request, response) => {
    response.end("Yo Yo Yo!");
  }
);
server.listen(process.env.PORT || 3e3);
