/*This app starts a server 
For every other path, it will respond with a 404 Not Found.*/

const express = require('express') //allows us to use express
const app = express()  /*starts express and stores it 
                        in a varible called app for later use*/

const API_KEY = 'ea7ac57855msh6bb435a851550d4p1340eejsn4552ae9a69ec' /*use to check where binaries are located and 
                                  make external calls to them if required.*/

const request = axios.create({
  baseURL  : "https://deezerdevs-deezer.p.rapidapi.com/search",
  timeout  : 300000,
  headers  : {"x-rapidapi-key" : API_KEY} 
})

export function getAlbums (search = 'eminem'){
    const albums = request.get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));
}


const bodyParser = require('body-parser');
const request = require('request'); 

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
app.use(bodyParser.urlencoded({extended: true}));



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
  res.render ('home.ejs')
});


app.get('/music', function (req, res) {


  let url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + req.body. + '&units=imperial&APPID='+apiKey;
  
  request(url, function (error, response, body) {
    if(error){
      res.render('home.ejs',{ data: null, error: "Error, please try again" });
    } else {
      let data = JSON.parse(body);
      if (data.main == undefined){
        res.render('home.ejs',{ data: null, error: "Error, please try again" });
      } else {
        res.render('home.ejs',{ data, error: null });
      }
    }
  });
 });

//handling post request for forward slash
//when the user sends data to the server to the we will use the api to communicate with deezer

//user sends data to server
/*app.get('/', function (req, res) {

});*/




app.listen(3000, function(){
  console.log('server is live on port: 3000');});
