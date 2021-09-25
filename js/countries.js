const loadCountries = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR1y2I8mHosFsF2GsGmGLi7ewLPQu4by8BAzBeliHnBNBY34LkWqB2SW07I')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
// map....
const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}
const getCountryHTML = country => {
    const { name, capital, flag } = country;
    return `
       <div class = country>
          <h2>${name}</h2>
          <h4>Capital: ${capital}</h4>
          <img src = "${flag}">
       </div >
    `
}
loadCountries();