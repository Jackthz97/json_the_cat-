const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (!error) {
    // Deserialization of the body from string to object
      const data = JSON.parse(body);

      if (!(data[0])) {
        return callback(error, ("Breed is not found"));
      } else {
        return callback(error, data[0].description);
      }
    }
    if (error) {
      return callback(error);
    }
  });
};

module.exports = { fetchBreedDescription };