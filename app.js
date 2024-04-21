const http = require("http");
const path = require("path");
const {
    mainRouteController,
    defaultRouteController,
    gameRouteController,
    voteRouteController,
} = require("./controllers");

const PORT = 3005;

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(res);
            break;
        default:
            defaultRouteController(res, url);
            break;
    }
});

server.listen(PORT);






//если что, используй это
// const mimeTypes = require("./appModules/http-utils/mime-types")
// const path = require("path")
// const http = require('http');
// const mainRouteController = require("./controllers/main")
// const defaultRouteController = require("./controllers/default")
// const voteRouteController = require("./controllers/vote")
// const gameRouteController = require("./controllers/game")

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     switch (url) {
//         case "/":
//             mainRouteController(res, "/index.html", ".html");
//             break;

//         case "/game":
//             gameRouteController(res);
//             break;

//         case "/vote":
//             voteRouteController(req, res);
//             break;
//         default:
//             defaultRouteController(res, url);
//     }
// });

// server.listen(3000);

// const http = require("http");


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     switch (url) {
//         case "/":
//             mainRouteController(res, "/index.html", ".html");
//             break;
//         case "/game":
//             gameRouteController(res);

//             break;

//         case "/vote":
//             voteRouteController(req, res);
//             break;

//         default:
//             defaultRouteController(res, url);
//     }
// });

// server.listen(3005);
