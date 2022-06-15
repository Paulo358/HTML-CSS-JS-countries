const fetchCountries= () => {
    const url = path => `https://restcountries.com/v2/${path}`

    const countriesPromises = []

    for (let i = 1; i < 195; i++) {
        countriesPromises.push(fetch(url("all")).then(res => res.json()))
    }

    Promise.all(countriesPromises).then(countries => {
        console.log(countries)

        const countryLi = countries.reduce((acc, country) => {
            acc += `<li>${country.name}</li>`
            return acc
        }, '')
    })
}

fetchCountries()