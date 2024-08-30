//Print the country that uses US dollars as currency.
fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    
    return response.json(); 
  })
  .then(data => {
    
    const countriesUsingUSD = data.filter(country => {
      
      return country.currencies && country.currencies.USD;
    });

    
    countriesUsingUSD.forEach(country => {
      console.log(country.name.common); 
    });
  })
  .catch(error => {
    
    console.error('Error:', error);
  });
