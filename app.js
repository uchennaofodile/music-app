/*This app starts a server 
For every other path, it will respond with a 404 Not Found.*/

const express = require('express') //allows us to use express
const app = express() /*starts express and stores it 
                        in a varible called app for later use*/
 
app.listen(3000, () => {
    console.log("API up and running!") /*This app listens on port 3000 for connections. 
    The app responds in the console */
});

app.get('/', function (request, response) { 
  response.send('Hey')
}); /*The app responds with “Hello World!” 
for requests to the root URL (/) or route. */

/* setting view engine, allows you
use ejs to view your content*/
app.set('view engine', 'ejs');


/*app middleware */
/*To serve static files such as images, CSS files, 
and JavaScript files, use the express.static built-in 
middleware function in Express.
The function signature is:
express.static(root, [options])*/


app.use(express.static('./public'));


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
app.get('/', function (request, response) {
  response.render('home.ejs')
}
);