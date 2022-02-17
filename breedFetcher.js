const request = require('request');
const args = process.argv;
const breedType = args[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, response, body) => {

  if (!error) {
    // Deserialization of the body from string to object
    const data = JSON.parse(body);

    // Print the error if one occurred

    // Print the response status code if a response was received
    // console.log('statusCode:', response && response.statusCode);
    if (!(data[0])) {
      console.log("Breed is not found");
    } else {
      console.log(data[0].description);
    }

    // Prints the data type of the requested body
    // console.log('Data type:',typeof data);
  } else if (error) {
    console.log(error);
  }
});