const fetchCountries = async () => {
    const url = path => `https://restcountries.com/v2/${path}`

    const countriesArray = []

    countriesArray.push(await fetch(url("all")).then(res => res.json()))

    console.log(countriesArray[0])

    let countriesLi = ''

    countriesArray[0].forEach(country => {

        const countriesEach = `
        <li class="countryCard ${country.region}">
            <img class="countryCard__flag" alt="${country.name}" src="${country.flags.png}" />
            <h3>${country.name}</h3>
            <p>Capital: ${country.name}</p>
            <p>Região: ${country.region}</p>
        </li>
        `
        countriesLi += countriesEach
    })

        const ul = document.getElementById('countryList__ul')
        ul.innerHTML = countriesLi
}

fetchCountries()