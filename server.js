const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(1234, () => console.log('Example app listening on port 1234!'))