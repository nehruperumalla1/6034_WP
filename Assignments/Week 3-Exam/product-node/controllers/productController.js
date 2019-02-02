var bodyParser = require('body-parser');

var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var jsondata =  fs.readFileSync('controllers/catalog.json');

var maindata = JSON.parse(jsondata);

exports.maindata = maindata;

console.log(maindata);

module.exports = function(app) {

    app.get('/', (req, res)=>{
        res.render('index.ejs', {data:maindata});
    });

    app.post('/', urlencodedParser, (req,res)=>{

    });

    app.delete('/', (req, res)=>{

    });
}