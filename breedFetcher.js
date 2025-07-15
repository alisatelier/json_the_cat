const needle = require('needle');


const fetchBreedDescription = (breedName, callback) => {
  const apiCall = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(apiCall, (error, response) => {
    if (error) {
      callback(`Request failed ${error}`, null);
      return;
    }

    const data = response.body;

    if (data.length === 0) {
      callback(`Breed "${breedName}" not found.`, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(`❌ API returned status code ${response.statusCode}`, null);
      return;
    }

    const breed = data[0];
    callback(null, breed.description);
  });
};



module.exports = { fetchBreedDescription };

