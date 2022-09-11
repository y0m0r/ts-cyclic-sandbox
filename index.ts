import * as http from "http";


// httpサーバーを設定する
const server = http.createServer(
    (request, response) => {
      // サーバーにリクエストがあった時に実行される関数
      response.end("Yo Yo Yo!");
    }
  );
  // サーバーを起動してリクエストを待ち受け状態にする
  server.listen(process.env.PORT || 3000);

