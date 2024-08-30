// Define the URL for the REST Countries API
const contrydata = 'https://restcountries.com/v3.1/all';


function fetchAndProcessCountries() {
    fetch(contrydata)
        .then(response => response.json())
        .then(data => {
            
            data.forEach(country => {
                
                const name = country.name.common; 
                const capital = country.capital ? country.capital[0] : 'No capital';
                const flag = country.flags.png; 

                
                console.log(`Name: ${name}`);
                console.log(`Capital: ${capital}`);
                console.log(`Flag: ${flag}`);
                
            });
        })
        .catch(error => {
           
            console.error('Error fetching the countries data:', error);
        });
}


fetchAndProcessCountries();
