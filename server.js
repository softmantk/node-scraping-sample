var express  = require('express');
var fs = require('fs');
var rp = require('request-promise');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req,res){

// @TODO will do scraping here

	(async ()=>{
		
		const url = 'http://www.imdb.com/title/tt1229340/';
		
		try{
		const response  = await rp(url);
		
		const $ = cheerio.load(response);

	debugger;

		//console.log('response', response);

		let title, release, rating;

		var json = {
			title : $("h1").text(),
			release: $("#titleYear").children().text(),
			rating: $("span[itemprop=ratingValue]").text()
		}		
		
		res.json(json);

		}
		catch(e){

			console.log(e.message);

		}
	
	} )()
});

app.listen(8080);
console.log('magic happens on localhost');
exports  = module.exports = app;


