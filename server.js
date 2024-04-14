const express = require('express');
const port = process.env.PORT || 2100;
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: './' });
});

app.get('/mando', (req, res) => {
	res.sendFile('mando.html', { root: './' });
});

app.listen(port, () => { console.log(`listening on ${port}`) });