/* function loadCountries(){
    fetch ('https://restcountries.eu/rest/v2/all')
    .then (res => res.json())
    .then (data => displayCountries(data))
}
loadCountries();
 function displayCountries(countries){
    const countryContainer = document.getElementById('countries');
    for (country of countries){
        console.log(country.name);
        const li = document.createElement('li');
        li.classList.add('countries');
        li.innerText =`Name: ${country.name}`;
        countryContainer.appendChild(li);
    }
 } */

 //-----USING ARROW FUNCTION------//

 const loadCountries = () =>{
    fetch ('https://restcountries.eu/rest/v2/all')
    .then (res => res.json())
    .then (data => displayCountries(data))
 } 
 loadCountries();
 /* const displayCountries = countries =>{
    const countryContainer = document.getElementById('countries');

    // ---for (country of countries)----\\ AND

    //---countries.forEach(country => {})----\\

    //  DOSE THE SAME JOB

       countries.forEach(country => {
        console.log(country.name);
        const li = document.createElement('li');
        li.classList.add('countries');
        li.innerText =`Name: ${country.name},
         Population:${country.population},
         Capital: ${country.capital}`;
        countryContainer.appendChild(li);
    })
 } */

 const displayCountries = countries =>{
    const countryContainer = document.getElementById('countries');

    // ---for (country of countries)----\\ AND

    //---countries.forEach(country => {})----\\

    //  DOSE THE SAME JOB

       countries.forEach(country => {
        // console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
        <div class = 'details'>
            <div>
                <h2>${country.name} </h2>
                <p>Capital:${country.name}</p>
                <p>population:${country.population}</p>
                <button onclick="countryDetails('${country.name}')      ">Details</button>
                </div>

            <div>
                <img src ="${country.flag}">
            </div>
        </div>
        
        `
/*         const h2 = document.createElement('h2');    
        h2.innerText = `Name:${country.name}`;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.classList.add('capital');
        p.innerText = `Capital:${country.capital}

        Population: ${country.population}`;
        div.appendChild(p); */

        countryContainer.appendChild(div);
    })
 }

 const countryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
 }
 const displayCountryDetails = country =>{
     const countryDiv = document.getElementById('country-details');
     countryDiv.innerHTML = `
     <h3 style = "padding-left:20px">${country.name}</h3>
     <img width='200px' src ="${country.flag}">`
 } 

