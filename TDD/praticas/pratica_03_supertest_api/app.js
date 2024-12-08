const express = require("express");
const app = express();
const port = 3000;
let server;

app.get("/hello", (req, res) => {
	res.status(200).send("Hello Word!");
});

// npm test -- --detectOpenHandles / ajuda a identificar os recusos que ainda estao abertos

// beforeAll(() => {
    // server = 
    // app.listen(port, () => {
    //     console.log(`Server is running on port ${port}`);
    //     });
// })

// afterAll(() => {
//     server.close();
// })

module.exports = app;
