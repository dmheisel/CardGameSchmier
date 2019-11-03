const express = require('express');
const bodyParser = require('body-parser');
const round = require('./modules/logic/round');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static('server/public'));

app.listen(PORT, () => {
	console.log('local server listening on port: ', PORT);
});
