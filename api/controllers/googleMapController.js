/*
Program : Google map controller
Écrit par : Dan Duc Dao
*/

"use strict";

const fs = require("fs");
const countries = require("countries-list/dist/countries.json");
const cities = require("cities.json");
const regions = require("../public/region.list.json");

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

module.exports = function(app) {
  app.get("/googleMapCities", function(req, res) {
    fs.readFile("../api/public/city.list.json", "utf8", function(err, data) {
      if (err) throw err;
      data = data.split("\n");
      var villes = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i] === "") continue;
        var json = JSON.parse(data[i]);
        villes.push(json);
      }
      villes.sort(compare);
      res.send(villes);
    });
  });
  app.get("/countries", function(req, res) {
    var pays = [];
    for (var abbr in countries) {
      pays.push({ name: countries[abbr].name, value: abbr });
    }
    pays.sort(compare);
    res.send(pays);
  });
  app.get("/cities", function(req, res) {
    var citiesFound = cities.filter(
      data => data.country.indexOf(req.query.abbrPays) !== -1
    );
    var returnCities = [];
    citiesFound.forEach(function(city) {
      returnCities.push({ name: city.name, value: city.name });
    });
    returnCities.sort(compare);
    res.send(returnCities);
  });

  app.get("/regions", function(req, res) {
    var returnRegions = [];
    var country = regions.filter(
      data => data.countryShortCode.indexOf(req.query.abbrPays) !== -1
    )[0];
    country.regions.forEach(function(region) {
      returnRegions.push({ name: region.name, value: region.shortCode });
    });
    returnRegions.sort(compare);
    res.send(returnRegions);
  });
};
