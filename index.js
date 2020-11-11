const {createUser, getUser, getTweets, createTweet, getTweets2, updateTweet, getName} = require('./users');
const { updateUser } = require('./users');
const express = require('express');
const bodyParser = require('body-parser');


const server = express();

const port = 3007;

server.use(bodyParser.json());

server.post('/newuser', async function(req, res){
    await createUser(req.body);
    console.log('req.body:',req.body);
    res.send("<b>I got something new, thanks!</b>");
});

server.post('/updatetweet', async function(req, res){
    const input = req.body;
    await updateTweet(input);
    res.sendStatus(200);
})

server.post('/updateuser', async function(req, res){
    const input = req.body;
    await updateUser(input);
    res.sendStatus(200);
})

server.get('/gettweet', async function(req, res){
    const getTweet = await getTweets2(req.query.id);
    const getNames = await getName(req.query.id);
    getTweet[0].author = getNames;
    
    res.json(getTweet);
    console.log(getTweet);
})

server.get('/user', async function(req, res){
    const result = await getUser(req.query.id);
    const firstName = result[0].firstname;
    res.json(result[0])
    console.log(firstName)
})

server.get('/tweets', async function(req, res){
    const result = await getTweets(req.query);
    const tweets = result;
    res.json(tweets)
    console.log(tweets)
})


server.post('/tweet', async function(req, res){
    await createTweet(req.body);
    console.log('req.body:',req.body);
    res.send("<b>I made a new tweet!</b>");
})

server.listen(port, ()=>{
    console.log('--------SERVER IS RUNNING!--------');
});
