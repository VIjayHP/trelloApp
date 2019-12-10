const express = require( 'express' );
const path = require( 'path' );

const app = express();

app.use( express.static( path.join( __dirname, 'public' ) ) );
/* app.use( express.static( path.join( process.cwd, 'public' ) ) );*/

const PORT = process.env.PORT || 3000;

app.listen( PORT, function(){

    console.log("application started");

} );