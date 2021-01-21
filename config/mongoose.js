//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect(
  "mongodb+srv://innospiders:spidersofinno@cluster0.mtupj.mongodb.net/inno_db?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);;
// mongoose.connect('mongodb+srv://admin-sanjeev:sANJEEVsk@cluster0.qcpgk.mongodb.net/club_inno_db?retryWrites=true&w=majority', {useNewUrlParser: true});;

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
    console.log("Successfully connected to the database");
});

module.exports = db;