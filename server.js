console.log("Loading Express... ");
let express = require("express");

console.log("Initializing Express... ");
let app = express();

app.use(express.static('static'));

app.listen(process.env.PORT || 21134, function () {
	console.log('Jikyu running on port: ', process.env.PORT || 21134);
});