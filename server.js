
const express = require('express')
const path = require('path')
const app = express()

const { lookUpID } = require('./service')

const HTTP_PORT = process.env.PORT || 80

function onHttpStart() {
	console.log("Express running on:", HTTP_PORT)
}

app.get('/', (req, res) => {
	// res.send("<h1>That's working .. </h1>")
	res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/home', (req, res) => {
	// res.send("<h1>That's working .. </h1>")
	res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get("/about", (req, res) => {
	// res.send("<h2>About Page</h2>")
	res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get("/promise", (req, res) => {
	lookUpID((req.query.id || 0)).then(function(data) {
		res.send("<h1>Hello, " + data.name + "</h1>")
	}, function(err) {
		console.log(err)
		res.send(err)
	})
})

app.listen(HTTP_PORT, onHttpStart)