const loadCounties = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCounties(data))
}

loadCounties()

const displayCounties = countries => {
    // My first system 
    // console.log(countries);
    // const allCounties = data;
    //  console.log(allCounties);
    // const countiesDiv = document.getElementById('counties');
  
    //  for(const country of allCounties){
    //      console.log(country.name.common);
    //      const p = document.createElement('p');
    //      p.innerText = `Country Name: ${country.name}`
    //      countiesDiv.appendChild(p)
    //  }
 
    // for(const country of counties){
    //     console.log(country);
    // }
     //   arrow function diye for loop kora  vaiya
    const countriesDiv = document.getElementById('counties');
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div')
        div.classList.add('country');
        //////
        div.innerHTML=`
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        //  or

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        //  div.appendChild(h3);
        //  const p = document.createElement('p');
        //  p.innerText = country.capital;
        //  div.appendChild(p);
        countriesDiv.appendChild(div);

    });

}

const loadCountryByName = name => {

const url = `https://restcountries.com/v3.1/name/${name}`
// console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displayCountryDetail(data[0]))
   
}

const displayCountryDetail = country => {
    console.log(country);
   const countryDiv = document.getElementById('country-detail') ;
   countryDiv.innerHTML = `
   <h4>${country.name.common}</h4>
   <p>Population: ${country.population}</p>
   <img width="200px" src="${country.flags.png}">
   `
}