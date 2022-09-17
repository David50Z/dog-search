/*import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import fetch from 'isomorphic-fetch';

const app = new Koa();
const router = new Router();
const port = 4200;*/

// const express = require('express')
// const app = express()
// port = 3001
// const path = require('path')
// const http = require('http')

//app.use(cors({origin: '*'}));

/*app.get('/api', (req, res) => {
	res.send('Hello World!')
});*/

// app.use(express.static(__dirname + '../dist/dog-search'))

// //app.set('view engine', 'pug')

// app.get('/client', (req, res) => {
// 	var options = {
// 		root: path.join(__dirname, 'dist/dog-search')
// 	}

// 	res.sendFile('index.html', options)
// });

/*app.use(async (ctx, next) => {
	await next();
	const rt = ctx.response.get('X-Response-Time');
	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});*/

//app.use(router.routes());

// const server = http.createServer(app)

// app.listen(port, () => {
// 	console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const fetch = require('node-fetch')
//import fetch from 'node-fetch';
//let fetch = await import('node-fetch')

const cors = require("cors")

const server = express();

server.use(express.static(path.join(__dirname, 'dist/dog-search')));
server.use(cors())

server.get('/client', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/dog-search', 'index.html'))
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

	console.log(`https://dog.ceo/api/breed/${req.params.dogo}/images/`)
//affenpinscher
	const response = await fetch(`https://dog.ceo/api/breed/${dogo}/images/`, options)
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

server.listen(3000, () => console.log('App Running on port 3000'));