/*This app starts a server 
For every other path, it will respond with a 404 Not Found.*/

const express = require('express') //allows us to use express
const app = express()  /*starts express and stores it 
                        in a varible called app for later use*/

const apiKey = process.env.APIKEY /*use to check where binaries are located and 
                                  make external calls to them if required.*/

const request = require('request');

const bodyParser = require('body-parser');
 

/* setting view engine, allows you
use ejs to view your content*/
app.set('view engine', 'ejs');


/*app.get('/', function (request, response) { 
  response.send('Hey')
}); The app responds with “Hello World!” 
for requests to the root URL (/) or route. */




/*app middleware */
/*To serve static files such as images, CSS files, 
and JavaScript files, use the express.static built-in 
middleware function in Express.
The function signature is:
express.static(root, [options])*/


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));



//ROUTES

//GET request for root = by default browser does get request/

/*res.render(view [, locals] [, callback])
Renders a view and sends the rendered HTML string to the client. 
Optional parameters:

locals, an object whose properties define local variables for the view.
callback, a callback function. 
If provided, the method returns both the possible error 
and rendered string, but does not perform an automated response. 
When an error occurs, the method invokes next(err) internally. */
app.get('/', function (req, res) {
  res.render('home.ejs')
});

//handling post request for forward slash
//when the user sends data to the server to the we will use the api to communicate with deezer

//user sends data to server
app.get('/', function (req, res) {

var options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  qs: {q: 'eminem'},
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': 'apiKey'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

});




app.listen(3000, () => {
  console.log("API up and running!") /*This app listens on port 3000 for connections. 
  The app responds in the console */
});