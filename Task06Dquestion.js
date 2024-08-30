//Print the total population of countries using reduce method
fetch('https://restcountries.com/v3.1/all')
  .then(response => {
   
    return response.json(); 
  })
  .then(data => {
    
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + country.population; 
    }, 0); 

    
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => {
    
    console.error('Error:', error);
  });
