const result = document.querySelector('#result');
const searchButton = document.querySelector('#search-btn');



async function getWeather() {

    const country = document.querySelector('#country').value;

    if (country == '')
        return;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'your-api-key-number',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${country}`, options)
        .then(response => response.json())
        .then(veri => {

            if(veri.code === 1006 || veri.code === 400){
                alert('No matching location found.');
            }
            console.log(veri);
            console.log(veri.location.country);
            console.log(veri.current.temp_c);

            result.innerHTML = `<span>${veri.location.country}, ${veri.current.temp_c} Celcius Degree</span>                            
                                `;

        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = `<span>Oops! No matching location found. Please enter again.</span>                            
            `;
        });



}


searchButton.addEventListener('click', getWeather);
