//Get all the countries with a population of less than 2 lakhs using Filter method
const contrydata = 'https://restcountries.com/v3.1/all';


fetch(contrydata)
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();  
  })
  .then(data => {
    
    const PopulationCountries = data.filter(country => country.population < 200000);
    //console.log(smallPopulationCountries); 

    
    const countryInfo = PopulationCountries.map(country => ({
      name: country.name.common,
      population: country.population
    }));
    console.log(countryInfo); 
  })
  .catch(error => {
    console.error('Error: ', error);
  });
