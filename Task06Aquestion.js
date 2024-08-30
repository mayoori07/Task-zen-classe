//Get all the countries from Asia continent /region using Filter method
const contrydata = 'https://restcountries.com/v3.1/all';

fetch(contrydata)
  .then(response => {
 
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    
    const asianCountries = data.filter(country => country.continents && country.continents.includes('Asia'));
    console.log(asianCountries); 

    
    const asianCountryNames = asianCountries.map(country => country.name.common);
    console.log(asianCountryNames); 
  })
  .catch(error => {
    
    console.error('Error fetching data: ', error);
  });


  //or
