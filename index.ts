import  express from "express"

const app: express.Express = express()

app.all('/', (req: express.Request, res: express.Response) => {
  console.log("Just got a request!")
  res.send('Express Yo Yo Yo Yo! Dist Dist!')
})
app.listen(process.env.PORT || 3000)



//import * as http from "http";
//const server = http.createServer(
//    (request, response) => {
//      response.end("Yo Yo Yo Yo!");
//    }
//  );
//  server.listen(process.env.PORT || 3000);

