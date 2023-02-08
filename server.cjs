const express = require('express');
const path = require('path');
const fetch = require('node-fetch')
let port = process.env.PORT || 3000
console.log(port)

const serverless = require('serverless-http')

const cors = require("cors");
const { appendFile } = require('fs');

const server = express();
const router = express.Router()

server.use(express.static(path.join(__dirname, './dist/dog-search')));
server.use(cors())

server.get('/client', async (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist/dog-search', 'index.html'))
	console.log('client section')
});

server.get('/api/:dogo', async (req, res) => {
	const options = {
		"method": "GET",
	}

	let dogoArr = req.params.dogo.split("")

	for(let i = 0; i < dogoArr.length; i++) {
		if(dogoArr[i] === "-") {
			dogoArr[i] = '/'
			console.log('yup')
		}
	}

	let dogo = dogoArr.join("")

	console.log(`https://dog.ceo/api/breed/${req.params.dogo}/images/random`)
//affenpinscher
	const response = await fetch(`https://dog.ceo/api/breed/${dogo}/images/random`, options)
		.then(res => res.json())
		.catch(e => {
			console.error({
				"message": "woops!",
				error: e,
			})
		})
	//console.log('RESPONSE: ', response)
	res.json(response)
})

server.get('/api/all/:dogo', async (req, res) => {
	const options = {
		"method": "GET",
	}

	let dogoArr = req.params.dogo.split("")

	for(let i = 0; i < dogoArr.length; i++) {
		if(dogoArr[i] === "-") {
			dogoArr[i] = '/'
			console.log('yup')
		}
	}

	let dogo = dogoArr.join("")

	console.log(`https://dog.ceo/api/breed/${req.params.dogo}/images`)
//affenpinscher
	const response = await fetch(`https://dog.ceo/api/breed/${dogo}/images`, options)
		.then(res => res.json())
		.catch(e => {
			console.error({
				"message": "woops!",
				error: e,
			})
		})
	//console.log('RESPONSE: ', response)
	res.json(response)
})

server.get('/api/breeds/', async (req, res) => {
	const options = {
		"method": "GET",
	}

//affenpinscher
	const response = await fetch(`https://dog.ceo/api/breeds/list/all`, options)
		.then(res => res.json())
		.catch(e => {
			console.error({
				"message": "woops!",
				error: e,
			})
		})
	//console.log('RESPONSE: ', response)
	res.json(response)
})

module.exports.handler = serverless(server)

//server.use('/.netlify/functions/server', router)

server.listen(port, () => console.log('App Running on port 3000'));
