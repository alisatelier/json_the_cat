const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = args[0];

const handleFetchResults = (error, desc) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(`${breedName}: `, desc);
  }
};


fetchBreedDescription(breedName, handleFetchResults);