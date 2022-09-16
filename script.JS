const tbody = document.getElementById("tbody");
const form = document.getElementById("form");
const search = document.getElementById("search")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7936c5b4a3msha17f8d8f05c5447p1da935jsn2efb89daf24b',
        'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
    }
};
//const search_api = "https://corona-virus-world-and-india-data.p.rapidapi.com/&search/api"
const upi = "https://corona-virus-world-and-india-data.p.rapidapi.com/api"
getdata(upi)

async function getdata(api) {
    const response = await fetch(api, options)
    const data = await response.json();
    console.log(data.countries_stat);
    showdata(data.countries_stat)
}

function showdata(mani) {
    mani.forEach(element => {
        const {
            country_name,
            cases,
            active_cases,
            new_deaths,
            deaths,
            new_cases,
            total_recovered,
            total_tests
        } = element

        tbody.innerHTML += `
          <tr>
            <td>${country_name}</td>
            <td>${cases}</td>
            <td>${active_cases}</td>
            <td>${deaths}</td>
            <td>${new_deaths}</td>
            <td>${new_cases}</td>
            <td>${ total_tests}</td>
            <td>${total_recovered}</td>
          </tr>
        `
    });
}