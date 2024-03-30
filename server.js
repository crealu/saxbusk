const express = require('express');
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
	res.sendFile('app.html', { root: ''});
});

app.listen(port, () => { console.log('listenting on 2100') });